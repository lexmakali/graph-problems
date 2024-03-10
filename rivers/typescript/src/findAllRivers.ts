export class Graph {
    private readonly adjList: Map<number, number[]>
    private readonly bidirectional: boolean

    constructor(bidirectional: boolean) {
        this.adjList = new Map()
        this.bidirectional = bidirectional
    }

    getNumVertices(): number {
        return this.adjList.size
    }

    getVertices(): number[] {
        return Array.from(this.adjList.keys())
    }

    getAdjList(): Map<number, number[]> {
        return this.adjList
    }

    addEdge(x: number, y: number) {
        if (this.adjList.has(x)) {
            this.adjList.get(x)?.push(y)
        } else {
            this.adjList.set(x, [y])
        }

        if (this.bidirectional) {
            if (this.adjList.has(y)) {
                this.adjList.get(y)?.push(x)
            } else {
                this.adjList.set(y, [x])
            }
        }
    }

    removeEdge(x: number, y: number): boolean {
        const xEdges = this.adjList.get(x)
        const yEdges = this.adjList.get(y)

        if (xEdges && yEdges) {
            const xIndex = xEdges.findIndex((element) => element === y)
            const yIndex = yEdges.findIndex((element) => element === x)

            if (xIndex !== -1 && yIndex !== -1) {
                xEdges.splice(xIndex, 1)
                
                if (this.bidirectional) {
                    yEdges.splice(yIndex, 1)
                }
                return true;
            }
        }

        throw new Error('Edge does not exist')
    }

    bfsTraverse(start: number): number[] {
        const result: number[] = []
        const queue: number[] = []
        const visited: Set<number> = new Set()
        queue.push(start)
        visited.add(start)

        while (queue.length > 0) {
            const current = queue.shift()
            if (current) {
                result.push(current)

                const neighbors = this.adjList.get(current) || []
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor)
                        queue.push(neighbor)
                    }
                }
            }
        }
        return result
    }

    dfsTraverse(start: number): number[] {
        const result: number[] = []
        const queue: number[] = []
        const visited: Set<number> = new Set()
        queue.push(start)
        visited.add(start)

        while (queue.length > 0) {
            const current = queue.pop()
            if (current) {
                result.push(current)

                const neighbors = this.adjList.get(current) || []
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor)
                        queue.push(neighbor)
                    }
                }
            }
        }
        return result
    }

    topologicalSort(start: number): number[] {
        const tSort: number[] = []
        const inDegreeMap = this.computeInDegree()
        let current: number = this.nextVertex(inDegreeMap)
        console.log(current)
        while (current !== -1) {
            tSort.push(current)
            this.reduceInDegreeOfNeighbors(current, inDegreeMap)
            inDegreeMap.delete(current)
            current = this.nextVertex(inDegreeMap)
        }
        console.log(tSort)
        return tSort
    }

    computeInDegree(): Map<number, number> {
        const inDegreeMap: Map<number, number> = new Map()

        this.adjList.forEach((_, vertex) => {
            inDegreeMap.set(vertex, 0);
        })

        this.adjList.forEach((neighbors, _) => {
            neighbors.forEach(neighbor => {
                inDegreeMap.set(neighbor, (inDegreeMap.get(neighbor) || 0) + 1);
            })
        })
        return inDegreeMap
    }

    nextVertex(inDegreeMap: Map<number, number>): number {
        console.log(inDegreeMap)
        for (const [vertex, inDegree] of inDegreeMap.entries()) {
            if (inDegree === 0) {
                return vertex;
            }
        }
        return -1
    }

    reduceInDegreeOfNeighbors(current: number, inDegreeMap: Map<number, number>) {
        const neighbors = this.adjList.get(current)
        neighbors?.forEach(neighbor => {
            if (inDegreeMap.has(neighbor)) {
                inDegreeMap.set(neighbor, inDegreeMap.get(neighbor)-1)
            }
        })
    }
}