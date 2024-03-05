import { solution, arraySetDifference, arraysEqual } from '../src/roadsBuilding'

describe('Solution Function', () => {
  it('should return the correct array set difference for provided input', () => {
    const cities = 4;
    const roads = [[0, 1], [1, 2], [2, 3]];

    const result = solution(cities, roads);

    // Expected result: [[0, 2], [0, 3], [1, 3]]
    expect(result).toEqual(expect.arrayContaining([[0, 2], [0, 3], [1, 3]]));
  });

  it('should return the correct array set difference for provided input', () => {
      const cities = 9;
      const roads = [[5,8], [6,0], [0,5], [4,1], [0,1], [7,0], [6,8], [7,3], [2,6],
                     [0,2], [0,3], [8,7], [5,4], [8,4], [8,2], [7,1], [4,6], [5,6],
                     [4,2], [4,7], [2,7], [3,6], [8,0], [1,6], [3,2], [3,4], [4,0],
                     [6,7], [5,7]]

      const result = solution(cities, roads);

      // Expected result: [[1,2], [1,3], [1,5], [1,8], [2,5], [3,5], [3,8]]
      expect(result).toEqual(expect.arrayContaining([[1,2], [1,3], [1,5], [1,8], [2,5], [3,5], [3,8]]));
    });

  it('should return an empty array if there are no roads provided', () => {
    const cities = 3;
    const roads: number[][] = [];

    const result = solution(cities, roads);

    expect(result).toEqual([]);
  });

  it('should handle the case with one city', () => {
    const cities = 1;
    const roads: number[][] = [];

    const result = solution(cities, roads);

    expect(result).toEqual([]);
  });
});

describe('Array Set Difference Function', () => {
  it('should return the correct array set difference', () => {
    const setA = [[1, 2], [3, 4], [5, 6]];
    const setB = [[3, 4], [5, 6], [7, 8]];

    // Expected result: [[1, 2]]
    const result = arraySetDifference(setA, setB);

    expect(result).toEqual([[1, 2]]);
  });

  it('should return an empty array if setB is empty', () => {
    const setA = [[1, 2], [3, 4]];
    const setB: number[][] = [];

    const result = arraySetDifference(setA, setB);

    expect(result).toEqual([]);
  });

  it('should handle arrays with different order as equal', () => {
    const setA = [[1, 2], [3, 4]];
    const setB = [[2, 1], [4, 3]];

    const result = arraySetDifference(setA, setB);

    expect(result).toEqual([]);
  });
});

describe('Arrays Equal Function', () => {
  it('should correctly identify equal arrays', () => {
    const array1 = [1, 2];
    const array2 = [2, 1];

    expect(arraysEqual(array1, array2)).toBe(true);
  });

  it('should correctly identify unequal arrays', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];

    expect(arraysEqual(array1, array2)).toBe(false);
  });
});
