import { solution } from '../src/roadSystem'

function runTestCases() {
  console.log("Test Case 1:");
  console.log(`Result: ${solution(roadRegister1)}`);
  console.log("Expected: true\n");

  console.log("Test Case 2:");
  console.log(`Result: ${solution(roadRegister2)}`);
  console.log("Expected: true\n");

  console.log("Test Case 3:");
  console.log(`Result: ${solution(roadRegister3)}`);
  console.log("Expected: false\n");
}

runTestCases();

// Test Cases
const roadRegister1: boolean[][] = [
  [false, true,  false, false],
  [false, false, true,  false],
  [true,  false, false, true ],
  [false, false, true,  false]
];

const roadRegister2: boolean[][] = [
  [false, true,  false, false, false, false, false],
  [true,  false, false, false, false, false, false],
  [false, false, false, true,  false, false, false],
  [false, false, true,  false, false, false, false],
  [false, false, false, false, false, false, true ],
  [false, false, false, false, true,  false, false],
  [false, false, false, false, false, true,  false]
];

const roadRegister3: boolean[][] = [
  [false, true,  false],
  [false, false, false],
  [true,  false, false]
];

