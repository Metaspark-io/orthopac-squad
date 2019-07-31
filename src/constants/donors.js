const donors = {
  generalDonations: 1500000,
  goal: 2100000,
  fiveK: [
    'Joseph Abboud MD',
    'Peter Bonutti MD',
    'John Callaghan MD',
    'Brett Freedman MD',
    'Charles Hope II, MD',
    'Claudette Lajam MD',
    'Peter Mandell MD',
    'Umasuthan Srikumaran MD, MBA'
  ],
}

export default donors

export const getTotalDonations = () => {
  return donors.generalDonations
}
