import { lookupTable } from '../src/lookup-table'

describe('lookupTable', () => {
  it('should return 0 for an empty array', () => {
    const result = lookupTable([])
    expect(result.numPairs).toBe(0)
  })

  it('should return 0 for an array with a single element', () => {
    const result = lookupTable([5])
    expect(result.numPairs).toBe(0)
  })

  it('should return the correct number of pairs for a valid array', () => {
    const result = lookupTable([1, -1, 2, 3])
    expect(result.numPairs).toBe(5)
  })

  it('should return the correct number of pairs for a valid array', () => {
    const result = lookupTable([2])
    expect(result.numPairs).toBe(1)
  })

  it('should return the correct number of pairs for a valid array', () => {
    const result = lookupTable([-2, -1, 0, 1, 2])
    expect(result.numPairs).toBe(5)
  })

  it('should return the correct number of pairs for a valid array', () => {
    const result = lookupTable([1, 2, 3, 4, 5, 6, 7, 8])
    expect(result.numPairs).toBe(8)
  })

  it('should handle negative numbers correctly', () => {
    const result = lookupTable([-1, 2, 3, -4, 5, -6, 7, 8])
    expect(result.numPairs).toBe(10)
  })

  it('should handle arrays with repeated elements', () => {
    const result = lookupTable([1, 2, 2, 3, 3, 3])
    expect(result.numPairs).toBe(7)
 })
})