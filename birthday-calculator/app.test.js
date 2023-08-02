const { getWeekday, calculateAge, isYearPresentOrFuture } = require('./app')

it('should return correct weekday for given date', () => {
  const date = new Date('01/01/2022')
  expect(getWeekday(date)).toBe('Saturday')
})

it('should correctly calculate age given a birth year and a year', () => {
  const year = 2022
  const birthYear = 1980
  expect(calculateAge(year, birthYear)).toBe(42)
})

it('should correctly check if entered year is in the present or future', () => {
  const birthYear = 1980
  expect(isYearPresentOrFuture(2022, birthYear)).toBe(true)
  expect(isYearPresentOrFuture(1980, birthYear)).toBe(true)
  expect(isYearPresentOrFuture(1970, birthYear)).toBe(false)
})
