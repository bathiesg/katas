export function getEvenNumbers(initialArray: number[]): number[] {
  const eventNumbers: number[] = initialArray.reduce(
    (accumulador: number[], currentNumber: number): number[] => {
      if (currentNumber % 2 === 0) {
        accumulador.push(currentNumber)
      }
      return accumulador
    },
    []
  )

  return eventNumbers
}
