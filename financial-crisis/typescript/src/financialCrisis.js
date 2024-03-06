"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCity = exports.deepCloneArray = exports.solution = void 0;
function solution(roadRegister) {
    if (roadRegister === null || roadRegister.length === 0) {
        return [];
    }
    var result = [];
    for (var city = 0; city < roadRegister.length; city++) {
        var roadRegisterAfterRemoval = removeCity(city, deepCloneArray(roadRegister));
        result.push(roadRegisterAfterRemoval);
    }
    return result;
}
exports.solution = solution;
function deepCloneArray(array) {
    var copiedRoadRegister = [];
    for (var i = 0; i < array.length; i++) {
        var newArray = [];
        for (var j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
        }
        copiedRoadRegister.push(newArray);
    }
    return copiedRoadRegister;
}
exports.deepCloneArray = deepCloneArray;
function removeCity(city, roadRegister) {
    // remove the row at city
    roadRegister.splice(city, 1);
    for (var i = 0; i < roadRegister.length; i++) {
        roadRegister[i].splice(city, 1);
    }
    console.log(roadRegister);
    return roadRegister;
}
exports.removeCity = removeCity;
