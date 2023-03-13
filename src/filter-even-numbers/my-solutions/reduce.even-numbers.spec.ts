import { getEvenNumbers } from './reduce.even-numbers'

describe('Get array of even numbers', () => {
  it('should return an array on even numbers', () => {
    const given = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const actual = getEvenNumbers(given)
    expect(actual).toEqual([2, 4, 6, 8])
  })
})
