const fs = require('fs');
const data = {
  programs: {
    '345435-43543-67657': {
      programName: 'Здесь и сейчас',
      id: '345435-43543-67657',
    },
    '657556-23434-43543': {
      programName: 'Еще не время',
      id: '657556-23434-43543',
    },
    programquadid: {
      programName: 'программа с quad',
      id: 'programquadid',
    },
  },

  components: {
    componenthripid: {
      id: 'componenthripid',
      programId: 'programquadid',
      titlerComponentName: 'Hrip',
      name: '',
      resultString: '',
      filename: 'hrip.gtzip',
      overlay: 1,
      autoclose: false,
      columns: {
        1: {
          id: '1',
          name: '',
          job: '',
          photo: '',
        },
        2: {
          id: '2',
          name: '',
          job: '',
          photo: '',
        },
        3: {
          id: '3',
          name: '',
          job: '',
          photo: '',
        },
        4: {
          id: '4',
          name: '',
          job: '',
          photo: '',
        },
        5: {
          id: '5',
          name: '',
          job: '',
          photo: '',
        },
        6: {
          id: '6',
          name: '',
          job: '',
          photo: '',
        },
        7: {
          id: '7',
          name: '',
          job: '',
          photo: '',
        },
        8: {
          id: '8',
          name: '',
          job: '',
          photo: '',
        },
        9: {
          id: '9',
          name: '',
          job: '',
          photo: '',
        },
      },
    },
    componentquadid: {
      id: 'componentquadid',
      programId: 'programquadid',
      titlerComponentName: 'Quad',
      name: '',
      resultString: '',
      filename: 'quad.gtzip',
      overlay: 1,
      autoclose: false,
      columns: {
        topLeft: {
          1: {
            id: '1',
            firstname: '',
            lastname: '',
          },
          2: {
            id: '2',
            firstname: '',
            lastname: '',
          },
          3: {
            id: '3',
            firstname: '',
            lastname: '',
          },
          4: {
            id: '4',
            firstname: '',
            lastname: '',
          },
        },
        topRight: {
          1: {
            id: '1',
            firstname: '',
            lastname: '',
          },
          2: {
            id: '2',
            firstname: '',
            lastname: '',
          },
          3: {
            id: '3',
            firstname: '',
            lastname: '',
          },
          4: {
            id: '4',
            firstname: '',
            lastname: '',
          },
        },
        bottomLeft: {
          1: {
            id: '1',
            firstname: '',
            lastname: '',
          },
          2: {
            id: '2',
            firstname: '',
            lastname: '',
          },
          3: {
            id: '3',
            firstname: '',
            lastname: '',
          },
          4: {
            id: '4',
            firstname: '',
            lastname: '',
          },
        },
        bottomRight: {
          1: {
            id: '1',
            firstname: '',
            lastname: '',
          },
          2: {
            id: '2',
            firstname: '',
            lastname: '',
          },
          3: {
            id: '3',
            firstname: '',
            lastname: '',
          },
          4: {
            id: '4',
            firstname: '',
            lastname: '',
          },
        },
      },
    },
    '7687688-32442-74354': {
      id: '7687688-32442-74354',
      programId: '345435-43543-67657',
      titlerComponentName: 'Button',
      columns: {
        '435435-5677768-231313': {
          id: '435435-5677768-231313',
          name: 'Промо1',
          filename: 'promo1.gzip',
          overlay: 2,
          autoclose: false,
        },
        '32468768-232435-1166789': {
          id: '32468768-232435-1166789',
          name: 'Промо2',
          filename: 'promo2.gzip',
          overlay: 2,
          autoclose: false,
        },
      },
    },
    '435435-32442-74354': {
      id: '435435-32442-74354',
      programId: '345435-43543-67657',
      titlerComponentName: 'MainTitle',
      columns: {
        '435435-54634-52234': {
          id: '435435-54634-52234',
          name: 'ТЕМА',
          filename: 'NEWS_theme_vmix.gtzip',
          autoclose: false,
          uppercase: true,
          overlay: 1,
        },
        '345453-54353-77877': {
          id: '345453-54353-77877',
          name: 'ФИО',
          filename: 'NEWS_name_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 1,
        },
        '55645-24325-12353': {
          id: '55645-24325-12353',
          name: 'ИСТОЧНИК',
          filename: 'NEWS_source_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 2,
        },
      },
      rows: [
        {
          id: 'd4f1fe7d-bbca-412c-9830-3bc35dae293c',
          value: [
            {
              id: '97f70236-dd89-43ca-a9e0-2a4b324eb3f7',
              columnId: '435435-54634-52234',
              value: '',
            },
            {
              id: '2b98da2f-7d65-45cd-8619-dfc2d02e9e47',
              columnId: '345453-54353-77877',
              value: '',
            },
            {
              id: '5533c0fe-7472-44ce-a26b-d10bf96b32e8',
              columnId: '55645-24325-12353',
              value: '',
            },
          ],
        },
        {
          id: '10a10091-4046-425d-b37f-783209d8e119',
          value: [
            {
              id: '7fcc808b-2f50-4409-af07-1b43620b8c62',
              columnId: '435435-54634-52234',
              value: 'POGODA',
            },
            {
              id: '5bbd1097-6b58-46bc-8bc2-bca1635d1943',
              columnId: '345453-54353-77877',
              value: 'PETR MIRONOV#DRIVER',
            },
            {
              id: '846efa9d-9533-414a-93ad-607ade90b2fb',
              columnId: '55645-24325-12353',
              value: 'TIMES',
            },
          ],
        },
      ],
    },
    '543435-45326-84674': {
      id: '543435-45326-84674',
      programId: '657556-23434-43543',
      titlerComponentName: 'MainTitle',
      columns: {
        '435244-436654-32426': {
          id: '435244-436654-32426',
          name: 'ГЕО',
          filename: 'NEWS_geo_vmix.gtzip',
          autoclose: false,
          uppercase: true,
          overlay: 2,
        },
        '55645-fgfgfg-12353': {
          id: '55645-fgfgfg-12353',
          name: 'ИСТОЧНИК',
          filename: 'NEWS_source_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 2,
        },
      },
      rows: [
        {
          id: '3399502f-c2b2-44f7-a11d-77a98290cf52',
          value: [
            {
              id: '047e38fd-73ae-44a4-9b61-949be01ad023',
              columnId: '435244-436654-32426',
              value: 'MOSCOW',
            },
            {
              id: '5533c0fe-7472-44ce-a26b-d10bf96b32e8',
              columnId: '55645-fgfgfg-12353',
              value: '',
            },
          ],
        },
        {
          id: '9ea08295-f6dd-47f8-bb44-d224cd1ee1ef',
          value: [
            {
              id: '1c613b2a-96c8-4060-bbb4-d657349b5c9b',
              columnId: '435244-436654-32426',
              value: '',
            },
            {
              id: '846efa9d-9533-414a-93ad-607ade90b2fb',
              columnId: '55645-fgfgfg-12353',
              value: 'TIMES',
            },
          ],
        },
      ],
    },
  },
};

fs.writeFileSync('./db2.json', JSON.stringify(data));
