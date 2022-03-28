import 'dotenv/config';
const fs = require('fs');
const SMB2 = require('@marsaud/smb2');

const vMixHostPath = process.env.VMIXHOST;
const dbPath = process.env.DB;

const getVmixHost = () => {
  const vmixData = fs.readFileSync(vMixHostPath, 'utf8');
  const parsedData = JSON.parse(vmixData);
  return new URL(parsedData.host).hostname;
};

const smb2Client = new SMB2({
  share: (() => {
    const hostname = getVmixHost();
    return `\\\\${hostname}\\${process.env.VMIX_STORE}`;
  })(),
  domain: process.env.DOMAIN,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

const checkShare = (path) => {
  return new Promise((resolve, reject) =>
    smb2Client.exists(path, (err, exists) => {
      if (err) return reject(`smb connection error: ${err}`);
      if (!exists) return reject(`path '${path}' not available`);
      return resolve();
    })
  );
};

exports.get_titles = function (req, res) {
  const db = fs.readFileSync(dbPath, 'utf8');
  let data = '';
  if (db) {
    data = JSON.parse(db);
  }
  res.json({ data });
};

exports.post_titles = function (req, res) {
  const data = req.body.data;
  fs.writeFileSync(dbPath, JSON.stringify(data), 'utf8');
  res.json({});
};

exports.get_vmix_store = async function (req, res) {
  const photoPath = process.env.VMIX_ASSETSPATH + process.env.VMIX_PHOTO;
  const titlesPath = process.env.VMIX_ASSETSPATH + process.env.VMIX_TITLES;
  await checkShare(process.env.VMIX_PHOTO)
    .then(() => checkShare(process.env.VMIX_TITLES))
    .catch((err) => {
      res.statusCode = 503;
      res.json({ error: err });
    });
  let photoNames = [];
  let titleNames = [];
  await new Promise((resolve, reject) => {
    smb2Client.readdir(process.env.VMIX_PHOTO, (err, files) => {
      if (err) {
        return reject(err);
      }
      files.sort();
      photoNames = files;
      resolve();
    });
  });
  await new Promise((resolve) => {
    smb2Client.readdir(process.env.VMIX_TITLES, (err, files) => {
      if (err) {
        console.log(err);
      }
      titleNames = files;
      resolve();
    });
  });
  const photo = {
    path: photoPath,
    values: photoNames,
  };
  const titles = {
    path: titlesPath,
    values: titleNames,
  };
  const data = {
    titles,
    photo,
  };
  res.json(data);
};

exports.set_vmix_host = function (req, res) {
  const host = req.body.data;

  fs.writeFileSync(vMixHostPath, JSON.stringify({ host }), 'utf8');
  res.json({});
};
