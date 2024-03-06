import { solution, deepCloneArray, removeCity } from '../src/financialCrisis';

describe('Solution Tests', () => {
  it('should return an empty array if roadRegister is null', () => {
    const result = solution(null);
    expect(result).toEqual([]);
  });

  it('should return an empty array if roadRegister is an empty array', () => {
    const result = solution([]);
    expect(result).toEqual([]);
  });

  it('should return an array of roadRegisters with one city removed for each city', () => {
    const roadRegister = [
      [false, true, true],
      [true, false, true],
      [true, true, false]
    ];

    const expectedResult = [
      [[false, true], [true, false]],
      [[true, true], [true, false]],
      [[true, false], [false, true]]
    ];

    const result = solution(roadRegister);
    expect(result).toEqual(expectedResult);
  });
});

describe('Helper Function Tests', () => {
  it('should deep clone a 2D boolean array', () => {
    const originalArray = [[true, false], [false, true]];
    const clonedArray = deepCloneArray(originalArray);
    expect(clonedArray).toEqual(originalArray);
    expect(clonedArray).not.toBe(originalArray); // Check for deep cloning
  });

  it('should remove a city from the roadRegister', () => {
    const roadRegister = [
      [false, true, true],
      [true, false, true],
      [true, true, false]
    ];

    const expectedResult = [
      [false, true],
      [true, false]
    ];

    const result = removeCity(2, roadRegister);
    expect(result).toEqual(expectedResult);
  });
});
