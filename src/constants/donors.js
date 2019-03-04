const donors = {
  generalDonations: 123456,
  oneK: [
    'Craig Akoh, MD',
    'James Davies, MD',
    'Ryan Eggers, MD, MA',
    'Mouhanad El-Othmani, MD',
    'Isaac Gammal, MD',
    'Peter Gold, MD',
    'Christen Hoedt, MD',
    'Christopher Lau, MD',
    'Philip Louie, MD',
    'Adam Olsen, MD',
    'Ali Qadeer, MD',
    'Jake Schroeder, MD',
    'Elizabeth Scott, MD',
    'Justin Smith, MD',
    'Megan Wolf, MD',
  ],
  twoK: [
    'Craig Akoh, MD',
    'James Davies, MD',
    'Ryan Eggers, MD, MA',
    'Mouhanad El-Othmani, MD',
    'Isaac Gammal, MD',
    'Peter Gold, MD',
    'Christen Hoedt, MD',
    'Christopher Lau, MD',
    'Philip Louie, MD',
    'Adam Olsen, MD',
    'Ali Qadeer, MD',
    'Jake Schroeder, MD',
    'Elizabeth Scott, MD',
    'Justin Smith, MD',
    'Megan Wolf, MD',
  ],
  threeK: [
    'Craig Akoh, MD',
    'James Davies, MD',
    'Ryan Eggers, MD, MA',
    'Mouhanad El-Othmani, MD',
    'Isaac Gammal, MD',
    'Peter Gold, MD',
    'Christen Hoedt, MD',
    'Christopher Lau, MD',
    'Philip Louie, MD',
    'Adam Olsen, MD',
    'Ali Qadeer, MD',
    'Jake Schroeder, MD',
    'Elizabeth Scott, MD',
    'Justin Smith, MD',
    'Megan Wolf, MD',
  ],
  fiveK: [
    'John Callaghan, MD',
    'Brett Freedman, MD',
    'Charles Hope II, MD',
    'Peter Mandell, MD',
    'Umasuthan Srikumaran, MD, MBA',
  ],
  futureCapitalClub: [
    'Craig Akoh, MD',
    'James Davies, MD',
    'Ryan Eggers, MD, MA',
    'Mouhanad El-Othmani, MD',
    'Isaac Gammal, MD',
    'Peter Gold, MD',
    'Christen Hoedt, MD',
    'Christopher Lau, MD',
    'Philip Louie, MD',
    'Adam Olsen, MD',
    'Ali Qadeer, MD',
    'Jake Schroeder, MD',
    'Elizabeth Scott, MD',
    'Justin Smith, MD',
    'Megan Wolf, MD',
  ],
}

export default donors

const DONATION_GROUPS = {
  oneK: 1000,
  twoK: 2000,
  threeK: 3000,
  fiveK: 5000,
}

export const getTotalDonations = () => {
  let donations = donors.generalDonations
  Object.keys(DONATION_GROUPS).forEach(group => {
    donations += group.length * DONATION_GROUPS[group]
  })
  return donations
}
