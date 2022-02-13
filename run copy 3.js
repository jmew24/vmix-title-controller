const fs = require('fs');
const data = {
  programs: {
    'd8a5e8c1-4903-467f-924a-8bd66aa07e66': {
      programName: 'И так далее',
      id: 'd8a5e8c1-4903-467f-924a-8bd66aa07e66',
      order: [
        'bd514ddd-a697-4a2a-ae68-a9cc534bdbcd',
        '72809251-2375-4c73-b2ba-6be09074d1da',
        'c5de6f5a-d9f8-4740-affe-d7cdc0214835',
        '94eadb03-2b75-4519-9e61-2ca209b7080e',
        '457df4d6-a3b8-4189-be1b-21c88c81c744',
      ],
    },
  },
  components: {
    '94eadb03-2b75-4519-9e61-2ca209b7080e': {
      id: '94eadb03-2b75-4519-9e61-2ca209b7080e',
      programId: 'd8a5e8c1-4903-467f-924a-8bd66aa07e66',
      titlerComponentName: 'MainTitle',
      columns: {
        'a78e7f37-7f9a-4c24-9812-ce3f8e82d774': {
          id: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
          name: 'ТЕМА',
          filename: 'NEWS_theme_vmix.gtzip',
          autoclose: false,
          uppercase: true,
          overlay: 1,
        },
        '9511db28-6ab9-4a76-b788-5d0397e3fbd2': {
          id: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
          name: 'ФИО#ДОЛЖНОСТЬ',
          filename: 'NEWS_name_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 1,
        },
        '7c79963f-1c82-4456-a2d1-8554fe3110ad': {
          id: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
          name: 'ГЕО',
          filename: 'NEWS_geo_vmix.gtzip',
          autoclose: false,
          uppercase: true,
          overlay: 2,
        },
        'a84866a3-8884-4e1f-a8ab-b8888c5bef3d': {
          id: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
          name: 'ИСТОЧНИК',
          filename: 'NEWS_source_vmix.gtzip',
          autoclose: false,
          uppercase: true,
          overlay: 2,
        },
      },
      rows: [
        {
          id: '15820c6a-394a-41e9-92ec-46fed5d3d3fd',
          value: [
            {
              id: '3baa8c2c-3b58-4cc8-992f-4f53bed04cfa',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: 'e987bd58-3c13-465a-8115-91a20295e91b',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: 'МОРЖ САМАРОВИЧ#РЫБАК',
            },
            {
              id: 'c75981a0-3aa3-4548-9dd5-cf8894daff5a',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: 'dae8427a-e164-4d92-bb47-694f4f29b6b0',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: '70e56bde-966f-4065-b2f0-37734b37a0ac',
          value: [
            {
              id: '3fae69f8-8c33-489d-983a-d609e50d3c47',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: '65f24824-31ff-4e42-8066-875df10bc0aa',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '8df24914-5836-4d2a-8ab3-9526ee81d2e2',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: 'ЛЕС',
            },
            {
              id: '1aa69b6c-92dd-4a07-84b8-a61d975e285c',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: 'f0ba2084-a29f-4e88-9ec3-66dd5af15c04',
          value: [
            {
              id: 'dbcef9f5-09f8-4bca-aee9-6a55e149d3fb',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: 'ДОЖДЬ СЕГОДНЯ',
            },
            {
              id: '72135422-3e48-4cab-b3f7-46c72f564477',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '098afb0a-4ddc-4573-b873-6e24afda6ebd',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: '84100c3f-451b-4502-92c1-10a9ab33653a',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: 'СОСЕДКА',
            },
          ],
        },
        {
          id: '632b610e-be4a-49aa-befa-ec05bf65e850',
          value: [
            {
              id: '02f984c7-7704-476c-9fe9-0345c1770e4b',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: 'fae13a43-939a-4487-95a8-5a11b4412c12',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: 'КИТ КАРПОВ#СМЕСИТЕЛЬ',
            },
            {
              id: '5abc1f23-ee7f-42cc-a57b-13c785a4464d',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: '9a762811-f811-4bdc-bd9a-a41c14adef66',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: '12edbcdf-8d44-49aa-9723-6c1c1df5e3d7',
          value: [
            {
              id: 'd95e759a-264d-4468-9631-c569fb482bfa',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: '03a5f827-b755-41c7-8321-901bcd404867',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '0645f965-28fd-473d-bf15-fb312d682a6c',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: 'd491f549-2fc5-482f-bd17-48ce3bd33013',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: 'DW',
            },
          ],
        },
        {
          id: 'b947a43f-8cb6-4ea1-9555-98204dfba66d',
          value: [
            {
              id: '759cdfe0-93af-4a16-ae2e-347f86423e47',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: '2294fd1e-18bf-4330-a62d-b7feca931870',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '30463882-02b3-4ee7-98d2-4160881625de',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: 'МАРС',
            },
            {
              id: '95132e93-1844-4a96-bdc6-84c4195e9b9e',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: '7ba74ea0-ce7c-432f-8976-a8fdd0ca873d',
          value: [
            {
              id: '54635f04-9d09-4a6f-852b-324dc6e1e5d5',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: 'ПОЖАР НА МАРСЕ',
            },
            {
              id: '622cdfff-3871-4348-92a2-48707813f3ca',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: 'fa620a6f-73b0-4614-9c35-a1247b94e22d',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: '9bb50960-b165-4a4c-8a5e-ee5c8db8f958',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: 'd3079ff5-bf74-4f85-846d-6e058f1b4200',
          value: [
            {
              id: 'd395725d-88f4-4873-a987-57db1cec142c',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: 'e8f6cb8d-7b89-4385-b3b5-c7a2c057f9ae',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: 'АНТОН ДУЛЬНЫЙ#ОХОТНИК',
            },
            {
              id: '46e859e6-a0a3-4876-bdd9-9bad580c69d3',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: 'e828f5c7-1f99-4781-b32b-11234c8788f7',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: '24f7dfd3-a7c7-433f-8c60-d3b8811f9a99',
          value: [
            {
              id: 'b9701141-6396-442c-8553-5c8ebba65e02',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: 'eb10b94b-39c8-425a-8e2b-10f4b1b35a66',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '3188bc44-b47b-48bc-b23b-94ef81804a19',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: 'ПЕТРОВКА 38',
            },
            {
              id: '01e06a5d-a579-41fd-ade9-645c1a22bdf5',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: 'fdb75ec2-0b4f-44de-9891-0cf90b3e5f12',
          value: [
            {
              id: '69d9d950-3740-4579-bd47-c2dc48645848',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: 'ВАКХАНАЛИЯ',
            },
            {
              id: '77b1af04-b4c1-4d8f-875f-6266eccfba81',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: 'bb0696a6-2322-4b12-af8b-a1eb9b108752',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: '79d60bd9-b276-4299-9824-9962cffd85db',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: 'NYTIMES',
            },
          ],
        },
        {
          id: '703e8ff5-f452-4bfb-abc0-93e295e3f992',
          value: [
            {
              id: '425c998e-f199-4968-9d97-d41b6bec0687',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: '0fb10533-003e-4610-9ee6-d8997638e13d',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '5a744853-846f-4fc5-ba30-090b72deb7e0',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: '18e38d01-7c46-4397-bdf8-a47d91b69a46',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
        {
          id: '73687321-eb4e-4890-9d3e-4f52920f1fab',
          value: [
            {
              id: '39971dcc-7dd1-4abc-86bc-8d8e491c9a6b',
              columnId: 'a78e7f37-7f9a-4c24-9812-ce3f8e82d774',
              value: '',
            },
            {
              id: '3eb582c9-0af4-46eb-ad5e-9d0a3df6dfc1',
              columnId: '9511db28-6ab9-4a76-b788-5d0397e3fbd2',
              value: '',
            },
            {
              id: '20f1318f-38fa-4486-a23a-e86a71e31cc1',
              columnId: '7c79963f-1c82-4456-a2d1-8554fe3110ad',
              value: '',
            },
            {
              id: 'f85475a6-d2fc-4e22-9e6d-68a05e4e61ba',
              columnId: 'a84866a3-8884-4e1f-a8ab-b8888c5bef3d',
              value: '',
            },
          ],
        },
      ],
    },
    '72809251-2375-4c73-b2ba-6be09074d1da': {
      id: '72809251-2375-4c73-b2ba-6be09074d1da',
      programId: 'd8a5e8c1-4903-467f-924a-8bd66aa07e66',
      titlerComponentName: 'Hrip',
      columns: {
        1: {
          id: '1',
          name: '',
          job: '',
          photo: '',
        },
        2: {
          id: '2',
          name: 'Антон Петров',
          job: 'Слесарь',
          photo: 'Babushkin_andrey.png',
        },
        3: {
          id: '3',
          name: '',
          job: '',
          photo: '',
        },
        4: {
          id: '4',
          name: 'Григорий Соколов',
          job: 'Выживатель',
          photo: 'Pashkin_Mikhail.png',
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
          name: 'Марина Иванова',
          job: 'Преподаватель',
          photo: 'Belyasheva.png',
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
      rows: [],
      resultString: '',
      filename: 'NEWS_hrip_vmix.gtzip',
      overlay: 1,
      autoclose: false,
      name: 'ХРИП',
    },
    'c5de6f5a-d9f8-4740-affe-d7cdc0214835': {
      id: 'c5de6f5a-d9f8-4740-affe-d7cdc0214835',
      programId: 'd8a5e8c1-4903-467f-924a-8bd66aa07e66',
      titlerComponentName: 'Quad',
      columns: {
        topLeft: {
          1: {
            id: '1',
            firstname: '',
            lastname: '',
          },
          2: {
            id: '2',
            firstname: 'Максим Петров',
            lastname: 'Токарь',
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
            firstname: 'Егор Агапкин',
            lastname: 'Футболист',
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
            firstname: 'Василий Кашин',
            lastname: 'Журналист',
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
            firstname: 'Евгений Егошин',
            lastname: 'Истопник',
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
      rows: [],
      resultString: '',
      filename: 'NEWS_okna4_vmix.gtzip',
      overlay: 1,
      autoclose: true,
      name: '4 ОКНА',
    },
    'bd514ddd-a697-4a2a-ae68-a9cc534bdbcd': {
      id: 'bd514ddd-a697-4a2a-ae68-a9cc534bdbcd',
      programId: 'd8a5e8c1-4903-467f-924a-8bd66aa07e66',
      titlerComponentName: 'Button',
      columns: {
        '14bdb45f-0418-4bdd-965b-fd242a42b070': {
          id: '14bdb45f-0418-4bdd-965b-fd242a42b070',
          name: 'Промо1',
          color: 'secondary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        'ab168886-1014-4204-93f7-64f4be0d4ac0': {
          id: 'ab168886-1014-4204-93f7-64f4be0d4ac0',
          name: 'Промо2',
          color: 'secondary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        'aeeae437-7dc7-435b-b974-a90f2538cde5': {
          id: 'aeeae437-7dc7-435b-b974-a90f2538cde5',
          name: 'Промо3',
          color: 'secondary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        '3b866837-090c-4761-8f07-ee97ab083c37': {
          id: '3b866837-090c-4761-8f07-ee97ab083c37',
          name: 'Промо4',
          color: 'secondary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        'eb147666-9c7d-4d9a-b4be-ade7d39b9c15': {
          id: 'eb147666-9c7d-4d9a-b4be-ade7d39b9c15',
          name: 'Баннер1',
          color: 'primary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        'bf7ab12e-6bf5-49a8-997c-323e28c140f9': {
          id: 'bf7ab12e-6bf5-49a8-997c-323e28c140f9',
          name: 'Баннер2',
          color: 'primary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        'a8e1e1a1-0f68-42af-a4ba-7d5c4e9285c6': {
          id: 'a8e1e1a1-0f68-42af-a4ba-7d5c4e9285c6',
          name: 'Баннер3',
          color: 'primary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        '09994388-07f5-4f87-963a-32c1ce0ad59e': {
          id: '09994388-07f5-4f87-963a-32c1ce0ad59e',
          name: 'Instagram',
          color: 'warning',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        '3b7b45b6-427c-4501-bcc5-e70d7a36d1e7': {
          id: '3b7b45b6-427c-4501-bcc5-e70d7a36d1e7',
          name: 'Telegram',
          color: 'primary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        '5a0bbdb4-4ec0-4c0f-a60a-e50d986ca521': {
          id: '5a0bbdb4-4ec0-4c0f-a60a-e50d986ca521',
          name: 'Reddit',
          color: 'danger',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        '371e486a-4924-454f-b81a-0d82b0b9dca2': {
          id: '371e486a-4924-454f-b81a-0d82b0b9dca2',
          name: 'Twitter',
          color: 'info',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
        '43f1eba1-6483-42ed-92aa-2156145f8486': {
          id: '43f1eba1-6483-42ed-92aa-2156145f8486',
          name: 'newButton',
          color: 'secondary',
          filename: '',
          overlay: 4,
          autoclose: false,
        },
      },
      rows: [],
    },
    '457df4d6-a3b8-4189-be1b-21c88c81c744': {
      id: '457df4d6-a3b8-4189-be1b-21c88c81c744',
      programId: 'd8a5e8c1-4903-467f-924a-8bd66aa07e66',
      titlerComponentName: 'MainTitle',
      columns: {
        '02278f1f-bac6-4877-8e89-8bd73630a9c5': {
          id: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
          name: 'ИНОАГЕНТ',
          filename: 'NEWS_inoagent_smi_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 2,
        },
        'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7': {
          id: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
          name: 'НКО',
          filename: 'NEWS_inoagent_nko_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 2,
        },
        '8cebe871-cced-4df9-8bb8-42875db43445': {
          id: '8cebe871-cced-4df9-8bb8-42875db43445',
          name: 'ОБШЧ',
          filename: 'NEWS_inoagent_obsch_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 2,
        },
        'e99e7f68-3f7e-450b-a8df-908880a7ef95': {
          id: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
          name: 'ЭКСТРЕМИСТ',
          filename: 'NEWS_extrimist_vmix.gtzip',
          autoclose: true,
          uppercase: true,
          overlay: 2,
        },
      },
      rows: [
        {
          id: 'c7c36be8-d820-4a8a-ae46-03f2b8b225bb',
          value: [
            {
              id: 'e2815904-4ad9-45b5-972a-1d39082b47f5',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: '13300b94-a247-4d23-a5cf-58d4cffa5b04',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '39ac2394-977e-4503-b11f-19dadc1912a7',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '9a8c7b85-c065-4248-8c49-e4e179a29e5e',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: 'a7c73b3d-ab8a-4382-a854-87c69b9e5cd1',
          value: [
            {
              id: '7c976315-77c7-41da-ae4b-3ee04328bf0c',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: '108f3870-6ae3-45ec-adfe-bed5408efc19',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '85285894-e120-4392-b664-1305ab2fd8e1',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: 'a26d6bfc-a9f8-475f-a586-e20c83aa7c24',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: '422d4492-085a-4383-af24-af5c0b952235',
          value: [
            {
              id: 'e639d65e-6a5a-4f0e-bd56-13cf970efee2',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: 'ДОЖДЬ',
            },
            {
              id: 'c7f3d965-db31-415a-be36-c730f449af3d',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '88d948e6-d0c4-4f63-a3af-6c5f11382997',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: 'b44c7203-f117-45b6-b10c-292eeb869565',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: '141a79c4-f7ec-4496-8f42-6cdb585ecf70',
          value: [
            {
              id: 'b2e511f9-b121-4824-aab8-7c0fe06a2503',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: '5af45b8d-29fa-457c-9713-8a6cfdd696a1',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: 'КОМПАНИЯ',
            },
            {
              id: 'b40ba706-b18a-4f2e-a707-e648b5ef1e65',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: 'a77f9f7d-4e8a-4855-820c-221921dde8a1',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: 'c1b630b8-d991-41af-984a-3df1508b90ea',
          value: [
            {
              id: '430a62d2-3746-4111-8a91-e7a96218a74f',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: 'fafcd775-c5cf-4682-8d86-b6813c3da254',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '1ed557e5-361d-4b31-8aab-de65b184ae0d',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '86476da6-4dad-4402-bcff-bc5ff973cbf1',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: 'НАВАЛЬНЫЙ',
            },
          ],
        },
        {
          id: '1dae0045-309a-48d1-ba99-de00304f3e8c',
          value: [
            {
              id: '0728588a-bd94-4b0e-bbe2-f71d5d5a529b',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: 'МЕДУЗА',
            },
            {
              id: 'a9810be5-deab-4423-9f78-6a00b2c65be6',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '52e0f0d1-3aab-4432-92ae-437a74b85ca2',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '84775860-2589-4091-940f-683e4cf43b26',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: 'b8b86571-3868-4739-b73b-40d809f5ea26',
          value: [
            {
              id: '0a14dfee-c48e-4889-9206-669df9d96870',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: 'b531bbec-f1c2-43d5-a159-cbcc933868f7',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '870e1b80-1875-4cc8-85ae-ca87650dbfca',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '450dff59-7611-4062-9548-6cee8737f504',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: '15b4b85f-2f73-48e8-b97d-6974ff8dc76d',
          value: [
            {
              id: 'ae9094b8-1ea5-41cd-a958-a6f356a104df',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: '6d054849-ad51-4bcf-a731-e09acd93f9a8',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '98c2e2fd-e657-4708-9689-d9b15d2313a8',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: 'ДРУГАЯ КОМПАНИЯ',
            },
            {
              id: 'b3243309-d7b2-41a3-a2b3-42345ff4293e',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: 'bccd3b9f-ed59-4110-bd84-b987a1516a49',
          value: [
            {
              id: '57e6ff68-a062-40ef-9dbf-d1ec13b0a205',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: 'aea4d238-580a-4346-a0fe-288d59da73d9',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '982466a6-ad1f-43a8-b826-611b2c925d28',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '7c1613b2-f053-4ee5-8d67-fa048a1691e5',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: 'e41d4fd4-cf1d-4012-8d97-3118a91c8c21',
          value: [
            {
              id: '71810062-1bcf-420a-b60d-49f7672494fc',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: 'befc4afe-de0b-4c77-93e2-05af17b394e6',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '5739b571-3345-4467-8f10-531cc7892555',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '75aaae99-e6c2-4800-8f8b-65548cfd48bb',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: 'ДРУГ НАВАЛЬНОГО',
            },
          ],
        },
        {
          id: '0fed2d48-786d-45db-885f-e35772201720',
          value: [
            {
              id: 'e1429bfa-f248-480e-a840-26b5e6c8e393',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: '7a3b5291-b176-443e-b8b6-36c82919d65d',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '10b9aa23-fc5d-4090-bd79-c774f9edca0d',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '20ae3826-557a-4704-a764-296ce51eba59',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
        {
          id: '6fe32049-03f8-4601-8c03-dbf244e5c268',
          value: [
            {
              id: '7b4cbea5-5763-46ee-aa94-d7494b7c2d7a',
              columnId: '02278f1f-bac6-4877-8e89-8bd73630a9c5',
              value: '',
            },
            {
              id: '3f5a95bf-fd63-4ad7-a7a5-935bba7736ca',
              columnId: 'adc8ec7f-a251-4bb5-a4cd-85e64ebbeee7',
              value: '',
            },
            {
              id: '8a1acdfe-1c51-4a6d-8480-a7020822268e',
              columnId: '8cebe871-cced-4df9-8bb8-42875db43445',
              value: '',
            },
            {
              id: '4f85a881-c030-4381-a43d-5ec7e61e6a82',
              columnId: 'e99e7f68-3f7e-450b-a8df-908880a7ef95',
              value: '',
            },
          ],
        },
      ],
    },
  },
};

fs.writeFileSync('./db2.json', JSON.stringify(data));
