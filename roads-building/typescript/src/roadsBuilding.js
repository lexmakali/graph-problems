"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraysEqual = exports.arraySetDifference = exports.solution = void 0;
function solution(cities, roads) {
    var allPossibleRoads = new Set();
    for (var x = 0; x < cities; x++) {
        for (var y = x + 1; y < cities; y++) {
            allPossibleRoads.add([x, y]);
        }
    }
    return arraySetDifference(Array.from(allPossibleRoads), roads);
}
exports.solution = solution;
// Function to compute the difference of two sets of arrays
function arraySetDifference(setA, setB) {
    var difference = [];
    var _loop_1 = function (arrayA) {
        // Check if arrayA is not present in setB
        if (!setB.some(function (arrayB) { return arraysEqual(arrayA, arrayB); })) {
            difference.push(arrayA.sort(function (n1, n2) { return n1 - n2; }));
        }
    };
    for (var _i = 0, setA_1 = setA; _i < setA_1.length; _i++) {
        var arrayA = setA_1[_i];
        _loop_1(arrayA);
    }
    return difference;
}
exports.arraySetDifference = arraySetDifference;
// Function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    if ((arr1[0] === arr2[0] && arr1[1] === arr2[1]) ||
        (arr1[0] === arr2[1] && arr1[1] === arr2[0])) {
        return true;
    }
    return false;
}
exports.arraysEqual = arraysEqual;
