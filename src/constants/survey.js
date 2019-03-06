export default [
  {
    question: 'What is your practice setting?',
    key: 'practice',
    answers: [
      {
        label: '​Private practice',
        value: 'AA',
      },
      {
        label: 'Academician',
        value: 'MM',
      },
      {
        label: '​In-training',
        value: 'LL',
      },
      {
        label: 'Hospital employed',
        value: 'SS',
      },
    ],
  },
  {
    question: 'Please select the issue you care most about.',
    key: 'issue',
    answers: [
      {
        label: 'Fair physician payment',
        value: 'SM',
      },
      {
        label: 'Medical Liability Reform',
        value: 'RR',
      },
      {
        label: 'Physician Ownership',
        value: 'AA',
      },
      {
        label: 'MSK Research',
        value: 'MM',
      },
    ],
  },
  {
    question: 'Rate your support of the OrthoPAC.',
    key: 'support',
    answers: [
      {
        label: 'Critical, support every year',
        value: 'SM',
      },
      {
        label: 'Moderate, Support when able ',
      },
      {
        label: 'Never have supported',
      },
    ],
  },
  {
    question: 'How many hours a week do you spend on paperwork?',
    key: 'paperwork',
    range: {
      low: 0,
      high: 40,
      unit: 'hours',
    }
  },
  {
    question: 'What is your favorite superpower?',
    key: 'superpower',
    answers: [
      {
        label: 'Flying',
        value: 'SM',
      },
      {
        label: 'Strength',
        value: 'SS',
      },
      {
        label: 'Tech Genius',
        value: 'MM',
      },
      {
        label: 'Elasticity',
        value: 'LL',
      },
      {
        label: 'Turning things into chocolate',
        value: 'RR',
      },
    ],
  },
  {
    question: 'Which sub-specialty most identifies with your practice?',
    key: 'specialty',
    textfield: {
      height: 3,
      placeholder: 'Please describe this however you would like.',
    }
  },
]
