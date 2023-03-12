import { FizzBuzzByArrayFrom } from './FizzBuzzByArrayFrom'

describe('FizzBizz', () => {
  it('should get an array which length is equal to the give number', () => {
    const given = 4
    const actual = FizzBuzzByArrayFrom(given).length
    expect(actual).toBe(4)
  })

  it('should replace 3 with fizz if it founds a number divisible by 3', () => {
    const given = 4
    const actual = FizzBuzzByArrayFrom(given)
    expect(actual).toEqual([1, 2, 'fizz', 4])
  })

  it('should replace 5 with buzz  if it founds a number divisible by 5', () => {
    const given = 5
    const actual = FizzBuzzByArrayFrom(given)
    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should replace with fizzbuzz it the number divisible with 3 and 5 at the same time', () => {
    const given = 15
    const actual = FizzBuzzByArrayFrom(given)
    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
