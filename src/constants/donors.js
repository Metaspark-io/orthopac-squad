const donors = {
  generalDonations: 1050814,
  goal: 2100000,
  fiveK: [
    'John Callaghan, MD',
    'Brett Freedman, MD',
    'Charles Hope II, MD',
    'Peter Mandell, MD',
    'Umasuthan Srikumaran, MD, MBA',
  ],
}

export default donors

export const getTotalDonations = () => {
  return donors.generalDonations
}
