import { solution } from '../src/dishesAndIngredients'

describe("Solution function", () => {
    describe("Test case 1", () => {
        const input: string[][] = [
            ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
        ];
        const expectedOutput: string[][] = [
            ["Cheese", "Quesadilla", "Sandwich"],
            ["Salad", "Salad", "Sandwich"],
            ["Sauce", "Pizza", "Quesadilla", "Salad"],
            ["Tomato", "Pizza", "Salad", "Sandwich"]
        ];

        it("should return the correct output", () => {
            expect(solution(input)).toEqual(expectedOutput);
        });
    });

    describe("Test case 2", () => {
        const input: string[][] = [
            ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
            ["Chicken Curry", "Chicken", "Curry Sauce"],
            ["Fried Rice", "Rice", "Onions", "Nuts"],
            ["Salad", "Spinach", "Nuts"],
            ["Sandwich", "Cheese", "Bread"],
            ["Quesadilla", "Chicken", "Cheese"]
        ];
        const expectedOutput: string[][] = [
            ["Cheese", "Quesadilla", "Sandwich"],
            ["Chicken", "Chicken Curry", "Quesadilla"],
            ["Nuts", "Fried Rice", "Salad"],
            ["Onions", "Fried Rice", "Pasta"]
        ];

        it("should return the correct output", () => {
            expect(solution(input)).toEqual(expectedOutput);
        });
    });

    describe("Test case 3", () => {
        const input: string[][] = [
            ["Pancakes", "Flour", "Milk", "Eggs", "Butter"],
            ["Waffles", "Flour", "Milk", "Syrup", "Butter"],
            ["Muffins", "Flour", "Milk", "Eggs", "Blueberries"]
        ];
        const expectedOutput: string[][] = [
            ["Butter", "Pancakes", "Waffles"],
            ["Eggs", "Muffins", "Pancakes"],
            ["Flour", "Muffins", "Pancakes", "Waffles"],
            ["Milk", "Muffins", "Pancakes", "Waffles"]
        ];

        it("should return the correct output", () => {
            expect(solution(input)).toEqual(expectedOutput);
        });
    });

    describe("Test case 4: Single ingredient dishes", () => {
        const input: string[][] = [
            ["Salad", "Tomato"],
            ["Pizza", "Cheese"],
            ["Sandwich", "Bread"]
        ];

        it("should return an empty array", () => {
            expect(solution(input)).toEqual([]);
        });
    });
});
