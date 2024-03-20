"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(nums) {
    var combinations = [];
    function generateCombinations(arr, size, start, temp) {
        if (temp.length === size) {
            combinations.push(__spreadArray([], temp, true));
            return;
        }
        for (var i = start; i < arr.length; i++) {
            temp.push(arr[i]);
            generateCombinations(arr, size, i + 1, temp);
            temp.pop();
        }
    }
    for (var j = 1; j <= ;  = nums.length)
        ;
    j++;
    {
        generateCombinations(nums, j, 0, []);
    }
    return combinations;
}
exports.solution = solution;
console.log("Generate combinations: ${solution([1, 2, 3, 4, 5]}");
