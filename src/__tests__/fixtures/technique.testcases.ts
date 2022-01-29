export const panFilters = [
  {
    name: 'x-ray emission spectroscopy',
  },
  {
    name: 'small angle scattering',
  },
  {
    name: {
      neq: 'x-ray emission spectroscopy',
    },
  },
  {
    name: {
      neq: 'small angle scattering',
    },
  },
  {
    and: [
      {
        name: 'small angle scattering',
      },
      {
        name: 'magnetism technique',
      },
    ],
  },
  {
    or: [
      {
        name: 'small angle scattering',
      },
      {
        name: 'magnetism technique',
      },
    ],
  },
  {
    and: [
      {
        name: 'small angle scattering',
      },
      {
        name: 'x-ray probe',
      },
    ],
  },
  {
    or: [
      {
        name: 'small angle scattering',
      },
      {
        name: 'x-ray probe',
      },
    ],
  },
  {
    and: [
      {
        name: 'small angle scattering',
      },
      {
        name: {
          neq: 'x-ray probe',
        },
      },
    ],
  },
  {
    and: [
      {
        name: 'small angle scattering',
      },
      {
        name: {
          neq: 'magnetism technique',
        },
      },
    ],
  },
  {
    pid: 'http://purl.org/pan-science/PaNET/PaNET01200',
  },
  {
    name: 'XES',
  },
];

export const expectedPanEspanded = [
  {pid: {inq: ['http://purl.org/pan-science/PaNET/PaNET01200']}},
  {
    pid: {
      inq: [
        'http://purl.org/pan-science/PaNET/PaNET01124',
        'http://purl.org/pan-science/PaNET/PaNET01107',
        'http://purl.org/pan-science/PaNET/PaNET01127',
        'http://purl.org/pan-science/PaNET/PaNET01133',
        'http://purl.org/pan-science/PaNET/PaNET01240',
        'http://purl.org/pan-science/PaNET/PaNET01241',
        'http://purl.org/pan-science/PaNET/PaNET01274',
        'http://purl.org/pan-science/PaNET/PaNET01275',
        'http://purl.org/pan-science/PaNET/PaNET01099',
        'http://purl.org/pan-science/PaNET/PaNET01276',
        'http://purl.org/pan-science/PaNET/PaNET01189',
        'http://purl.org/pan-science/PaNET/PaNET01277',
        'http://purl.org/pan-science/PaNET/PaNET01278',
        'http://purl.org/pan-science/PaNET/PaNET01279',
        'http://purl.org/pan-science/PaNET/PaNET01280',
        'http://purl.org/pan-science/PaNET/PaNET01188',
        'http://purl.org/pan-science/PaNET/PaNET01281',
        'http://purl.org/pan-science/PaNET/PaNET01273',
        'http://purl.org/pan-science/PaNET/PaNET01282',
        'http://purl.org/pan-science/PaNET/PaNET01162',
        'http://purl.org/pan-science/PaNET/PaNET01287',
        'http://purl.org/pan-science/PaNET/PaNET01286',
      ],
    },
  },
  {pid: {nin: ['http://purl.org/pan-science/PaNET/PaNET01200']}},
  {
    pid: {
      nin: [
        'http://purl.org/pan-science/PaNET/PaNET01124',
        'http://purl.org/pan-science/PaNET/PaNET01107',
        'http://purl.org/pan-science/PaNET/PaNET01127',
        'http://purl.org/pan-science/PaNET/PaNET01133',
        'http://purl.org/pan-science/PaNET/PaNET01240',
        'http://purl.org/pan-science/PaNET/PaNET01241',
        'http://purl.org/pan-science/PaNET/PaNET01274',
        'http://purl.org/pan-science/PaNET/PaNET01275',
        'http://purl.org/pan-science/PaNET/PaNET01099',
        'http://purl.org/pan-science/PaNET/PaNET01276',
        'http://purl.org/pan-science/PaNET/PaNET01189',
        'http://purl.org/pan-science/PaNET/PaNET01277',
        'http://purl.org/pan-science/PaNET/PaNET01278',
        'http://purl.org/pan-science/PaNET/PaNET01279',
        'http://purl.org/pan-science/PaNET/PaNET01280',
        'http://purl.org/pan-science/PaNET/PaNET01188',
        'http://purl.org/pan-science/PaNET/PaNET01281',
        'http://purl.org/pan-science/PaNET/PaNET01273',
        'http://purl.org/pan-science/PaNET/PaNET01282',
        'http://purl.org/pan-science/PaNET/PaNET01162',
        'http://purl.org/pan-science/PaNET/PaNET01287',
        'http://purl.org/pan-science/PaNET/PaNET01286',
      ],
    },
  },
  {
    and: [
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01124',
            'http://purl.org/pan-science/PaNET/PaNET01107',
            'http://purl.org/pan-science/PaNET/PaNET01127',
            'http://purl.org/pan-science/PaNET/PaNET01133',
            'http://purl.org/pan-science/PaNET/PaNET01240',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01099',
            'http://purl.org/pan-science/PaNET/PaNET01276',
            'http://purl.org/pan-science/PaNET/PaNET01189',
            'http://purl.org/pan-science/PaNET/PaNET01277',
            'http://purl.org/pan-science/PaNET/PaNET01278',
            'http://purl.org/pan-science/PaNET/PaNET01279',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01273',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
          ],
        },
      },
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET00207',
            'http://purl.org/pan-science/PaNET/PaNET01141',
            'http://purl.org/pan-science/PaNET/PaNET01137',
            'http://purl.org/pan-science/PaNET/PaNET01221',
            'http://purl.org/pan-science/PaNET/PaNET01252',
            'http://purl.org/pan-science/PaNET/PaNET01253',
            'http://purl.org/pan-science/PaNET/PaNET01142',
            'http://purl.org/pan-science/PaNET/PaNET01259',
            'http://purl.org/pan-science/PaNET/PaNET01143',
            'http://purl.org/pan-science/PaNET/PaNET01301',
            'http://purl.org/pan-science/PaNET/PaNET01313',
          ],
        },
      },
    ],
  },
  {
    or: [
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01124',
            'http://purl.org/pan-science/PaNET/PaNET01107',
            'http://purl.org/pan-science/PaNET/PaNET01127',
            'http://purl.org/pan-science/PaNET/PaNET01133',
            'http://purl.org/pan-science/PaNET/PaNET01240',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01099',
            'http://purl.org/pan-science/PaNET/PaNET01276',
            'http://purl.org/pan-science/PaNET/PaNET01189',
            'http://purl.org/pan-science/PaNET/PaNET01277',
            'http://purl.org/pan-science/PaNET/PaNET01278',
            'http://purl.org/pan-science/PaNET/PaNET01279',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01273',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
          ],
        },
      },
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET00207',
            'http://purl.org/pan-science/PaNET/PaNET01141',
            'http://purl.org/pan-science/PaNET/PaNET01137',
            'http://purl.org/pan-science/PaNET/PaNET01221',
            'http://purl.org/pan-science/PaNET/PaNET01252',
            'http://purl.org/pan-science/PaNET/PaNET01253',
            'http://purl.org/pan-science/PaNET/PaNET01142',
            'http://purl.org/pan-science/PaNET/PaNET01259',
            'http://purl.org/pan-science/PaNET/PaNET01143',
            'http://purl.org/pan-science/PaNET/PaNET01301',
            'http://purl.org/pan-science/PaNET/PaNET01313',
          ],
        },
      },
    ],
  },
  {
    and: [
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01124',
            'http://purl.org/pan-science/PaNET/PaNET01107',
            'http://purl.org/pan-science/PaNET/PaNET01127',
            'http://purl.org/pan-science/PaNET/PaNET01133',
            'http://purl.org/pan-science/PaNET/PaNET01240',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01099',
            'http://purl.org/pan-science/PaNET/PaNET01276',
            'http://purl.org/pan-science/PaNET/PaNET01189',
            'http://purl.org/pan-science/PaNET/PaNET01277',
            'http://purl.org/pan-science/PaNET/PaNET01278',
            'http://purl.org/pan-science/PaNET/PaNET01279',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01273',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
          ],
        },
      },
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01012',
            'http://purl.org/pan-science/PaNET/PaNET01095',
            'http://purl.org/pan-science/PaNET/PaNET01156',
            'http://purl.org/pan-science/PaNET/PaNET01101',
            'http://purl.org/pan-science/PaNET/PaNET01013',
            'http://purl.org/pan-science/PaNET/PaNET01103',
            'http://purl.org/pan-science/PaNET/PaNET01140',
            'http://purl.org/pan-science/PaNET/PaNET01149',
            'http://purl.org/pan-science/PaNET/PaNET01160',
            'http://purl.org/pan-science/PaNET/PaNET01161',
            'http://purl.org/pan-science/PaNET/PaNET01165',
            'http://purl.org/pan-science/PaNET/PaNET01172',
            'http://purl.org/pan-science/PaNET/PaNET01182',
            'http://purl.org/pan-science/PaNET/PaNET01183',
            'http://purl.org/pan-science/PaNET/PaNET01015',
            'http://purl.org/pan-science/PaNET/PaNET01187',
            'http://purl.org/pan-science/PaNET/PaNET01184',
            'http://purl.org/pan-science/PaNET/PaNET01186',
            'http://purl.org/pan-science/PaNET/PaNET01196',
            'http://purl.org/pan-science/PaNET/PaNET01197',
            'http://purl.org/pan-science/PaNET/PaNET01199',
            'http://purl.org/pan-science/PaNET/PaNET01200',
            'http://purl.org/pan-science/PaNET/PaNET01208',
            'http://purl.org/pan-science/PaNET/PaNET01216',
            'http://purl.org/pan-science/PaNET/PaNET01204',
            'http://purl.org/pan-science/PaNET/PaNET01218',
            'http://purl.org/pan-science/PaNET/PaNET01219',
            'http://purl.org/pan-science/PaNET/PaNET01137',
            'http://purl.org/pan-science/PaNET/PaNET01221',
            'http://purl.org/pan-science/PaNET/PaNET01224',
            'http://purl.org/pan-science/PaNET/PaNET01227',
            'http://purl.org/pan-science/PaNET/PaNET01229',
            'http://purl.org/pan-science/PaNET/PaNET01205',
            'http://purl.org/pan-science/PaNET/PaNET01238',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01258',
            'http://purl.org/pan-science/PaNET/PaNET01259',
            'http://purl.org/pan-science/PaNET/PaNET01260',
            'http://purl.org/pan-science/PaNET/PaNET01261',
            'http://purl.org/pan-science/PaNET/PaNET01262',
            'http://purl.org/pan-science/PaNET/PaNET01266',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01283',
            'http://purl.org/pan-science/PaNET/PaNET01284',
            'http://purl.org/pan-science/PaNET/PaNET01167',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
            'http://purl.org/pan-science/PaNET/PaNET01289',
            'http://purl.org/pan-science/PaNET/PaNET01285',
            'http://purl.org/pan-science/PaNET/PaNET01290',
            'http://purl.org/pan-science/PaNET/PaNET01294',
            'http://purl.org/pan-science/PaNET/PaNET01180',
            'http://purl.org/pan-science/PaNET/PaNET01295',
            'http://purl.org/pan-science/PaNET/PaNET01297',
            'http://purl.org/pan-science/PaNET/PaNET01301',
            'http://purl.org/pan-science/PaNET/PaNET01302',
            'http://purl.org/pan-science/PaNET/PaNET01303',
            'http://purl.org/pan-science/PaNET/PaNET01014',
            'http://purl.org/pan-science/PaNET/PaNET01305',
            'http://purl.org/pan-science/PaNET/PaNET01271',
            'http://purl.org/pan-science/PaNET/PaNET01306',
            'http://purl.org/pan-science/PaNET/PaNET01272',
            'http://purl.org/pan-science/PaNET/PaNET01307',
            'http://purl.org/pan-science/PaNET/PaNET01102',
            'http://purl.org/pan-science/PaNET/PaNET01168',
            'http://purl.org/pan-science/PaNET/PaNET01309',
            'http://purl.org/pan-science/PaNET/PaNET01169',
            'http://purl.org/pan-science/PaNET/PaNET01310',
            'http://purl.org/pan-science/PaNET/PaNET01311',
            'http://purl.org/pan-science/PaNET/PaNET01312',
            'http://purl.org/pan-science/PaNET/PaNET01207',
            'http://purl.org/pan-science/PaNET/PaNET01313',
            'http://purl.org/pan-science/PaNET/PaNET01314',
            'http://purl.org/pan-science/PaNET/PaNET01315',
            'http://purl.org/pan-science/PaNET/PaNET01191',
            'http://purl.org/pan-science/PaNET/PaNET01316',
            'http://purl.org/pan-science/PaNET/PaNET01193',
            'http://purl.org/pan-science/PaNET/PaNET01321',
            'http://purl.org/pan-science/PaNET/PaNET01198',
            'http://purl.org/pan-science/PaNET/PaNET01322',
            'http://purl.org/pan-science/PaNET/PaNET01173',
            'http://purl.org/pan-science/PaNET/PaNET01325',
            'http://purl.org/pan-science/PaNET/PaNET01300',
            'http://purl.org/pan-science/PaNET/PaNET01327',
          ],
        },
      },
    ],
  },
  {
    or: [
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01124',
            'http://purl.org/pan-science/PaNET/PaNET01107',
            'http://purl.org/pan-science/PaNET/PaNET01127',
            'http://purl.org/pan-science/PaNET/PaNET01133',
            'http://purl.org/pan-science/PaNET/PaNET01240',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01099',
            'http://purl.org/pan-science/PaNET/PaNET01276',
            'http://purl.org/pan-science/PaNET/PaNET01189',
            'http://purl.org/pan-science/PaNET/PaNET01277',
            'http://purl.org/pan-science/PaNET/PaNET01278',
            'http://purl.org/pan-science/PaNET/PaNET01279',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01273',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
          ],
        },
      },
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01012',
            'http://purl.org/pan-science/PaNET/PaNET01095',
            'http://purl.org/pan-science/PaNET/PaNET01156',
            'http://purl.org/pan-science/PaNET/PaNET01101',
            'http://purl.org/pan-science/PaNET/PaNET01013',
            'http://purl.org/pan-science/PaNET/PaNET01103',
            'http://purl.org/pan-science/PaNET/PaNET01140',
            'http://purl.org/pan-science/PaNET/PaNET01149',
            'http://purl.org/pan-science/PaNET/PaNET01160',
            'http://purl.org/pan-science/PaNET/PaNET01161',
            'http://purl.org/pan-science/PaNET/PaNET01165',
            'http://purl.org/pan-science/PaNET/PaNET01172',
            'http://purl.org/pan-science/PaNET/PaNET01182',
            'http://purl.org/pan-science/PaNET/PaNET01183',
            'http://purl.org/pan-science/PaNET/PaNET01015',
            'http://purl.org/pan-science/PaNET/PaNET01187',
            'http://purl.org/pan-science/PaNET/PaNET01184',
            'http://purl.org/pan-science/PaNET/PaNET01186',
            'http://purl.org/pan-science/PaNET/PaNET01196',
            'http://purl.org/pan-science/PaNET/PaNET01197',
            'http://purl.org/pan-science/PaNET/PaNET01199',
            'http://purl.org/pan-science/PaNET/PaNET01200',
            'http://purl.org/pan-science/PaNET/PaNET01208',
            'http://purl.org/pan-science/PaNET/PaNET01216',
            'http://purl.org/pan-science/PaNET/PaNET01204',
            'http://purl.org/pan-science/PaNET/PaNET01218',
            'http://purl.org/pan-science/PaNET/PaNET01219',
            'http://purl.org/pan-science/PaNET/PaNET01137',
            'http://purl.org/pan-science/PaNET/PaNET01221',
            'http://purl.org/pan-science/PaNET/PaNET01224',
            'http://purl.org/pan-science/PaNET/PaNET01227',
            'http://purl.org/pan-science/PaNET/PaNET01229',
            'http://purl.org/pan-science/PaNET/PaNET01205',
            'http://purl.org/pan-science/PaNET/PaNET01238',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01258',
            'http://purl.org/pan-science/PaNET/PaNET01259',
            'http://purl.org/pan-science/PaNET/PaNET01260',
            'http://purl.org/pan-science/PaNET/PaNET01261',
            'http://purl.org/pan-science/PaNET/PaNET01262',
            'http://purl.org/pan-science/PaNET/PaNET01266',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01283',
            'http://purl.org/pan-science/PaNET/PaNET01284',
            'http://purl.org/pan-science/PaNET/PaNET01167',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
            'http://purl.org/pan-science/PaNET/PaNET01289',
            'http://purl.org/pan-science/PaNET/PaNET01285',
            'http://purl.org/pan-science/PaNET/PaNET01290',
            'http://purl.org/pan-science/PaNET/PaNET01294',
            'http://purl.org/pan-science/PaNET/PaNET01180',
            'http://purl.org/pan-science/PaNET/PaNET01295',
            'http://purl.org/pan-science/PaNET/PaNET01297',
            'http://purl.org/pan-science/PaNET/PaNET01301',
            'http://purl.org/pan-science/PaNET/PaNET01302',
            'http://purl.org/pan-science/PaNET/PaNET01303',
            'http://purl.org/pan-science/PaNET/PaNET01014',
            'http://purl.org/pan-science/PaNET/PaNET01305',
            'http://purl.org/pan-science/PaNET/PaNET01271',
            'http://purl.org/pan-science/PaNET/PaNET01306',
            'http://purl.org/pan-science/PaNET/PaNET01272',
            'http://purl.org/pan-science/PaNET/PaNET01307',
            'http://purl.org/pan-science/PaNET/PaNET01102',
            'http://purl.org/pan-science/PaNET/PaNET01168',
            'http://purl.org/pan-science/PaNET/PaNET01309',
            'http://purl.org/pan-science/PaNET/PaNET01169',
            'http://purl.org/pan-science/PaNET/PaNET01310',
            'http://purl.org/pan-science/PaNET/PaNET01311',
            'http://purl.org/pan-science/PaNET/PaNET01312',
            'http://purl.org/pan-science/PaNET/PaNET01207',
            'http://purl.org/pan-science/PaNET/PaNET01313',
            'http://purl.org/pan-science/PaNET/PaNET01314',
            'http://purl.org/pan-science/PaNET/PaNET01315',
            'http://purl.org/pan-science/PaNET/PaNET01191',
            'http://purl.org/pan-science/PaNET/PaNET01316',
            'http://purl.org/pan-science/PaNET/PaNET01193',
            'http://purl.org/pan-science/PaNET/PaNET01321',
            'http://purl.org/pan-science/PaNET/PaNET01198',
            'http://purl.org/pan-science/PaNET/PaNET01322',
            'http://purl.org/pan-science/PaNET/PaNET01173',
            'http://purl.org/pan-science/PaNET/PaNET01325',
            'http://purl.org/pan-science/PaNET/PaNET01300',
            'http://purl.org/pan-science/PaNET/PaNET01327',
          ],
        },
      },
    ],
  },
  {
    and: [
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01124',
            'http://purl.org/pan-science/PaNET/PaNET01107',
            'http://purl.org/pan-science/PaNET/PaNET01127',
            'http://purl.org/pan-science/PaNET/PaNET01133',
            'http://purl.org/pan-science/PaNET/PaNET01240',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01099',
            'http://purl.org/pan-science/PaNET/PaNET01276',
            'http://purl.org/pan-science/PaNET/PaNET01189',
            'http://purl.org/pan-science/PaNET/PaNET01277',
            'http://purl.org/pan-science/PaNET/PaNET01278',
            'http://purl.org/pan-science/PaNET/PaNET01279',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01273',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
          ],
        },
      },
      {
        pid: {
          nin: [
            'http://purl.org/pan-science/PaNET/PaNET01012',
            'http://purl.org/pan-science/PaNET/PaNET01095',
            'http://purl.org/pan-science/PaNET/PaNET01156',
            'http://purl.org/pan-science/PaNET/PaNET01101',
            'http://purl.org/pan-science/PaNET/PaNET01013',
            'http://purl.org/pan-science/PaNET/PaNET01103',
            'http://purl.org/pan-science/PaNET/PaNET01140',
            'http://purl.org/pan-science/PaNET/PaNET01149',
            'http://purl.org/pan-science/PaNET/PaNET01160',
            'http://purl.org/pan-science/PaNET/PaNET01161',
            'http://purl.org/pan-science/PaNET/PaNET01165',
            'http://purl.org/pan-science/PaNET/PaNET01172',
            'http://purl.org/pan-science/PaNET/PaNET01182',
            'http://purl.org/pan-science/PaNET/PaNET01183',
            'http://purl.org/pan-science/PaNET/PaNET01015',
            'http://purl.org/pan-science/PaNET/PaNET01187',
            'http://purl.org/pan-science/PaNET/PaNET01184',
            'http://purl.org/pan-science/PaNET/PaNET01186',
            'http://purl.org/pan-science/PaNET/PaNET01196',
            'http://purl.org/pan-science/PaNET/PaNET01197',
            'http://purl.org/pan-science/PaNET/PaNET01199',
            'http://purl.org/pan-science/PaNET/PaNET01200',
            'http://purl.org/pan-science/PaNET/PaNET01208',
            'http://purl.org/pan-science/PaNET/PaNET01216',
            'http://purl.org/pan-science/PaNET/PaNET01204',
            'http://purl.org/pan-science/PaNET/PaNET01218',
            'http://purl.org/pan-science/PaNET/PaNET01219',
            'http://purl.org/pan-science/PaNET/PaNET01137',
            'http://purl.org/pan-science/PaNET/PaNET01221',
            'http://purl.org/pan-science/PaNET/PaNET01224',
            'http://purl.org/pan-science/PaNET/PaNET01227',
            'http://purl.org/pan-science/PaNET/PaNET01229',
            'http://purl.org/pan-science/PaNET/PaNET01205',
            'http://purl.org/pan-science/PaNET/PaNET01238',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01258',
            'http://purl.org/pan-science/PaNET/PaNET01259',
            'http://purl.org/pan-science/PaNET/PaNET01260',
            'http://purl.org/pan-science/PaNET/PaNET01261',
            'http://purl.org/pan-science/PaNET/PaNET01262',
            'http://purl.org/pan-science/PaNET/PaNET01266',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01283',
            'http://purl.org/pan-science/PaNET/PaNET01284',
            'http://purl.org/pan-science/PaNET/PaNET01167',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
            'http://purl.org/pan-science/PaNET/PaNET01289',
            'http://purl.org/pan-science/PaNET/PaNET01285',
            'http://purl.org/pan-science/PaNET/PaNET01290',
            'http://purl.org/pan-science/PaNET/PaNET01294',
            'http://purl.org/pan-science/PaNET/PaNET01180',
            'http://purl.org/pan-science/PaNET/PaNET01295',
            'http://purl.org/pan-science/PaNET/PaNET01297',
            'http://purl.org/pan-science/PaNET/PaNET01301',
            'http://purl.org/pan-science/PaNET/PaNET01302',
            'http://purl.org/pan-science/PaNET/PaNET01303',
            'http://purl.org/pan-science/PaNET/PaNET01014',
            'http://purl.org/pan-science/PaNET/PaNET01305',
            'http://purl.org/pan-science/PaNET/PaNET01271',
            'http://purl.org/pan-science/PaNET/PaNET01306',
            'http://purl.org/pan-science/PaNET/PaNET01272',
            'http://purl.org/pan-science/PaNET/PaNET01307',
            'http://purl.org/pan-science/PaNET/PaNET01102',
            'http://purl.org/pan-science/PaNET/PaNET01168',
            'http://purl.org/pan-science/PaNET/PaNET01309',
            'http://purl.org/pan-science/PaNET/PaNET01169',
            'http://purl.org/pan-science/PaNET/PaNET01310',
            'http://purl.org/pan-science/PaNET/PaNET01311',
            'http://purl.org/pan-science/PaNET/PaNET01312',
            'http://purl.org/pan-science/PaNET/PaNET01207',
            'http://purl.org/pan-science/PaNET/PaNET01313',
            'http://purl.org/pan-science/PaNET/PaNET01314',
            'http://purl.org/pan-science/PaNET/PaNET01315',
            'http://purl.org/pan-science/PaNET/PaNET01191',
            'http://purl.org/pan-science/PaNET/PaNET01316',
            'http://purl.org/pan-science/PaNET/PaNET01193',
            'http://purl.org/pan-science/PaNET/PaNET01321',
            'http://purl.org/pan-science/PaNET/PaNET01198',
            'http://purl.org/pan-science/PaNET/PaNET01322',
            'http://purl.org/pan-science/PaNET/PaNET01173',
            'http://purl.org/pan-science/PaNET/PaNET01325',
            'http://purl.org/pan-science/PaNET/PaNET01300',
            'http://purl.org/pan-science/PaNET/PaNET01327',
          ],
        },
      },
    ],
  },
  {
    and: [
      {
        pid: {
          inq: [
            'http://purl.org/pan-science/PaNET/PaNET01124',
            'http://purl.org/pan-science/PaNET/PaNET01107',
            'http://purl.org/pan-science/PaNET/PaNET01127',
            'http://purl.org/pan-science/PaNET/PaNET01133',
            'http://purl.org/pan-science/PaNET/PaNET01240',
            'http://purl.org/pan-science/PaNET/PaNET01241',
            'http://purl.org/pan-science/PaNET/PaNET01274',
            'http://purl.org/pan-science/PaNET/PaNET01275',
            'http://purl.org/pan-science/PaNET/PaNET01099',
            'http://purl.org/pan-science/PaNET/PaNET01276',
            'http://purl.org/pan-science/PaNET/PaNET01189',
            'http://purl.org/pan-science/PaNET/PaNET01277',
            'http://purl.org/pan-science/PaNET/PaNET01278',
            'http://purl.org/pan-science/PaNET/PaNET01279',
            'http://purl.org/pan-science/PaNET/PaNET01280',
            'http://purl.org/pan-science/PaNET/PaNET01188',
            'http://purl.org/pan-science/PaNET/PaNET01281',
            'http://purl.org/pan-science/PaNET/PaNET01273',
            'http://purl.org/pan-science/PaNET/PaNET01282',
            'http://purl.org/pan-science/PaNET/PaNET01162',
            'http://purl.org/pan-science/PaNET/PaNET01287',
            'http://purl.org/pan-science/PaNET/PaNET01286',
          ],
        },
      },
      {
        pid: {
          nin: [
            'http://purl.org/pan-science/PaNET/PaNET00207',
            'http://purl.org/pan-science/PaNET/PaNET01141',
            'http://purl.org/pan-science/PaNET/PaNET01137',
            'http://purl.org/pan-science/PaNET/PaNET01221',
            'http://purl.org/pan-science/PaNET/PaNET01252',
            'http://purl.org/pan-science/PaNET/PaNET01253',
            'http://purl.org/pan-science/PaNET/PaNET01142',
            'http://purl.org/pan-science/PaNET/PaNET01259',
            'http://purl.org/pan-science/PaNET/PaNET01143',
            'http://purl.org/pan-science/PaNET/PaNET01301',
            'http://purl.org/pan-science/PaNET/PaNET01313',
          ],
        },
      },
    ],
  },
  {pid: {inq: ['http://purl.org/pan-science/PaNET/PaNET01200']}},
  {pid: {inq: ['http://purl.org/pan-science/PaNET/PaNET01200']}},
];