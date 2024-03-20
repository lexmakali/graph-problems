export function solution(dishes: string[][]): string[][] {
    const map: Map<string, string[]> = new Map()
    dishes.forEach(element => {
        const dishName: string = element[0]
        const ingredients: string[] = element.slice(1) // Create a copy of the array
        ingredients
            .forEach((ingredient: string) => {
                if (!map.has(ingredient)) {
                    map.set(ingredient, [])
                }
                map.get(ingredient)!.push(dishName)
            })
    })
    removeSingleIngredients(map)
    return sortLexicographically(map)
}

function removeSingleIngredients(map: Map<string, string[]>) {
    map.forEach((values, key) => {
        if (values.length <= 1) {
            map.delete(key)
        }
    })
}

function sortLexicographically(dishesByIngredientsMap: Map<string, string[]>): string[][] {
    const dishesByIngredientsArray: string[][] = []
    dishesByIngredientsMap.forEach((values, key) => {
        values.sort()
        let flattenedEntry: string[] = []
        flattenedEntry.push(key)
        flattenedEntry = flattenedEntry.concat(values)
        dishesByIngredientsArray.push(flattenedEntry)
    })
    dishesByIngredientsArray.sort((a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : -1))
    return dishesByIngredientsArray
}
