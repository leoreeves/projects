const { getBirthdayDayOfWeek, calculateAge, checkIfEnteredYearIsPresentOrFuture } = require('./app')

it('should get correct birthday day of the week', () => {
  const dateOfBirth = new Date('01/01/2022')
  expect(getBirthdayDayOfWeek(dateOfBirth)).toBe('Saturday')
})

it('should correctly calculate age', () => {
  const enteredYear = 2022
  const birthYear = 1980
  expect(calculateAge(enteredYear, birthYear)).toBe(42)
})

it('should correctly check entered year', () => {
  const birthYear = 1980
  expect(checkIfEnteredYearIsPresentOrFuture(2022, birthYear)).toBe(true)
  expect(checkIfEnteredYearIsPresentOrFuture(1980, birthYear)).toBe(true)
  expect(checkIfEnteredYearIsPresentOrFuture(1970, birthYear)).toBe(false)
})
