export function solution(roadRegister: boolean[][]): boolean[][][] {
    if (roadRegister === null || roadRegister.length === 0) {
        return []
    }
    
    let result: boolean[][][] = []
    for (let city = 0; city < roadRegister.length; city++) {
        const roadRegisterAfterRemoval: boolean[][] = removeCity(city, deepCloneArray(roadRegister))
        result.push(roadRegisterAfterRemoval)
    }
    return result
}

export function deepCloneArray(array: boolean[][]): boolean[][] {
    let copiedRoadRegister: boolean[][] = []
    for (let i = 0; i < array.length; i++) {
        const newArray: boolean[] = []
        for (let j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j])
        }
        copiedRoadRegister.push(newArray)
    }
    return copiedRoadRegister
}

export function removeCity(city: number, roadRegister: boolean[][]): boolean[][] {
    // remove the row at city
    roadRegister.splice(city, 1)
    for (let i = 0; i < roadRegister.length; i++) {
        roadRegister[i].splice(city, 1)
    }
    console.log(roadRegister)
    return roadRegister
}
