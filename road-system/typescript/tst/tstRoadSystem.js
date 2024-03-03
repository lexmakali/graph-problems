"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var roadSystem_1 = require("../src/roadSystem");
function runTestCases() {
    console.log("Test Case 1:");
    console.log("Result: ".concat((0, roadSystem_1.solution)(roadRegister1)));
    console.log("Expected: true\n");
    console.log("Test Case 2:");
    console.log("Result: ".concat((0, roadSystem_1.solution)(roadRegister2)));
    console.log("Expected: true\n");
    console.log("Test Case 3:");
    console.log("Result: ".concat((0, roadSystem_1.solution)(roadRegister3)));
    console.log("Expected: false\n");
}
runTestCases();
// Test Cases
var roadRegister1 = [
    [false, true, false, false],
    [false, false, true, false],
    [true, false, false, true],
    [false, false, true, false]
];
var roadRegister2 = [
    [false, true, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false],
    [false, false, false, false, false, true, false]
];
var roadRegister3 = [
    [false, true, false],
    [false, false, false],
    [true, false, false]
];
