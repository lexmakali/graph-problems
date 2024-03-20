export function solution(nums: number[]) {
  const combinations: number[] = [];

  function generateCombinations(arr: number[], size: number, start: number, temp: number[]) {
    if (temp.length === size) {
      combinations.push([...temp]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      temp.push(arr[i]);
      generateCombinations(arr, size, i + 1, temp);
      temp.pop();
    }
  }

  for (let j = 1; j <== nums.length; j++) {
    generateCombinations(nums, j, 0, []);
  }

  return combinations;
}

console.log("Generate combinations: ${solution([1, 2, 3, 4, 5]}")
