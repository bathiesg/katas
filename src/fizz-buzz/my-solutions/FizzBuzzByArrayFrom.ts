export function FizzBuzzByArrayFrom(givenNumber: number): Array<number | string> {
  return Array.from({ length: givenNumber }, (_, i) => {
    let currentValue = i + 1
    let goodValue: number | string = ''
    if (currentValue % 3 === 0) {
      goodValue += 'fizz'
    }

    if (currentValue % 5 === 0) {
      goodValue += 'buzz'
    }

    if (goodValue === '') goodValue = currentValue

    return goodValue
  })
}
