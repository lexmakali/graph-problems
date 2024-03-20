"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(dishes) {
    var map = new Map();
    dishes.forEach(function (element) {
        var dishName = element[0];
        var ingredients = element.slice(1); // Create a copy of the array
        ingredients
            .forEach(function (ingredient) {
            if (!map.has(ingredient)) {
                map.set(ingredient, []);
            }
            map.get(ingredient).push(dishName);
        });
    });
    removeSingleIngredients(map);
    return sortLexicographically(map);
}
exports.solution = solution;
function removeSingleIngredients(map) {
    map.forEach(function (values, key) {
        if (values.length <= 1) {
            map.delete(key);
        }
    });
}
function sortLexicographically(dishesByIngredientsMap) {
    var dishesByIngredientsArray = [];
    dishesByIngredientsMap.forEach(function (values, key) {
        values.sort();
        var flattenedEntry = [];
        flattenedEntry.push(key);
        flattenedEntry = flattenedEntry.concat(values);
        dishesByIngredientsArray.push(flattenedEntry);
    });
    dishesByIngredientsArray.sort(function (a, b) { return a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : -1); });
    return dishesByIngredientsArray;
}
