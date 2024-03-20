"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dishesAndIngredients_1 = require("../src/dishesAndIngredients");
describe("Solution function", function () {
    describe("Test case 1", function () {
        var input = [
            ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
        ];
        var expectedOutput = [
            ["Cheese", "Quesadilla", "Sandwich"],
            ["Salad", "Salad", "Sandwich"],
            ["Sauce", "Pizza", "Quesadilla", "Salad"],
            ["Tomato", "Pizza", "Salad", "Sandwich"]
        ];
        it("should return the correct output", function () {
            expect((0, dishesAndIngredients_1.solution)(input)).toEqual(expectedOutput);
        });
    });
    describe("Test case 2", function () {
        var input = [
            ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
            ["Chicken Curry", "Chicken", "Curry Sauce"],
            ["Fried Rice", "Rice", "Onions", "Nuts"],
            ["Salad", "Spinach", "Nuts"],
            ["Sandwich", "Cheese", "Bread"],
            ["Quesadilla", "Chicken", "Cheese"]
        ];
        var expectedOutput = [
            ["Cheese", "Quesadilla", "Sandwich"],
            ["Chicken", "Chicken Curry", "Quesadilla"],
            ["Nuts", "Fried Rice", "Salad"],
            ["Onions", "Fried Rice", "Pasta"]
        ];
        it("should return the correct output", function () {
            expect((0, dishesAndIngredients_1.solution)(input)).toEqual(expectedOutput);
        });
    });
});
