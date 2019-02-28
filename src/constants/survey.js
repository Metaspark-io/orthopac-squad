export default [
  {
    question: 'What is your practice setting?',
    answers: [
      {
        label: '​Private practice',
      },
      {
        label: 'Academician',
      },
      {
        label: '​In-training',
      },
      {
        label: 'Hospital employed',
      },
    ],
  },
  {
    question: 'Please select the issue you care most about.',
    answers: [
      {
        label: 'fair physician payment (SM)',
      },
      {
        label: 'Medical Liability Reform (RR)',
      },
      {
        label: 'Physician Ownership (AA)',
      },
      {
        label: 'MSK Research (MM)',
      },
    ],
  },
  {
    question: 'Rate your support of the OrthoPAC.',
    answers: [
      {
        label: 'Critical, support every year (SM)',
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
    range: {
      low: 0,
      high: 40,
      unit: 'hours',
    }
  },
  {
    question: 'What is your favorite superpower?',
    answers: [
      {
        label: 'Flying (SM)',
      },
      {
        label: 'Strength (SS)',
      },
      {
        label: 'Tech Genius (MM)',
      },
      {
        label: 'Elasticity (LL)',
      },
      {
        label: 'turning things into chocolate (RR)',
      },
    ],
  },
  {
    question: 'Which sub-specialty most identifies with your practice?',
    textfield: {
      height: 3,
      placeholder: 'Please describe this however you would like.',
    }
  },
]
