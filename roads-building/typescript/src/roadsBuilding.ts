export function solution(cities: number, roads: number[][]): number[][] {
    const allPossibleRoads: Set<number[]> = new Set()
    for (var x = 0; x < cities; x++) {
        for (var y = x + 1; y < cities; y++) {
            allPossibleRoads.add([x, y])
        }
    }
    return arraySetDifference(Array.from(allPossibleRoads), roads)
}

// Function to compute the difference of two sets of arrays
export function arraySetDifference(setA: any[][], setB: any[][]): any[][] {
    const difference: any[][] = [];

    for (const arrayA of setA) {
        // Check if arrayA is not present in setB
        if (!setB.some(arrayB => arraysEqual(arrayA, arrayB))) {
            difference.push(arrayA.sort((n1, n2) => n1 - n2))
        }
    }

    return difference;
}

// Function to check if two arrays are equal
export function arraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
        return false
    }

    if ((arr1[0] === arr2[0] && arr1[1] === arr2[1]) ||
        (arr1[0] === arr2[1] && arr1[1] === arr2[0])) {
        return true
    }

    return false
}
