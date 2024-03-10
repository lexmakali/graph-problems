class SumTwoPowerPairs {
    resultPair: number[][]
    numPairs: number
}

export function lookupTable(numbers: number[]): SumTwoPowerPairs {
    let numPairs: number = 0
    const resultPair: number[][] = []
    const MAX_TWO_POWERS: number = 21
    const dict = new Map()


    for (const element of numbers) {
        dict.set(element, dict.has(element) ? dict.get(element) + 1 : 1)

        for (let two_power = 0; two_power < MAX_TWO_POWERS; two_power++) {
            const second_element = (1 << two_power) - element
            if (dict.has(second_element)) {
                numPairs += dict.get(second_element)
                resultPair.push([element, second_element])
            }
        }
    }
    return {
        resultPair,
        numPairs
    }
}