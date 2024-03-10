import { Graph } from '../src/findAllRivers'

function deepEqual(a: any, b: any): boolean {
    // Implementation as mentioned in the previous response
    if (a === b) {
      return true
    }
  
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
      return false
    }
  
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
  
    if (keysA.length !== keysB.length) {
      return false
    }
  
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false
      }
    }
  
    return true
  }
  

describe('Graph Operations', () => {
  let graph: Graph

  beforeEach(() => {
    graph = new Graph(true)
  })

  test('Add Edge', () => {
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    expect(deepEqual(graph.getAdjList(), new Map([
        [1, [2]],
        [2, [1, 3]],
        [3, [2]],
      ]))).toBe(true)
  })

  test('Remove Edge', () => {
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    graph.removeEdge(1, 2)
    expect(deepEqual(graph.getAdjList(), new Map([
        [2, [3]],
        [3, [2]],
      ]))).toBe(true)
  })

  test('BFS Traverse', () => {
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    graph.addEdge(3, 4)
    graph.addEdge(1, 5)

    expect(deepEqual(graph.bfsTraverse(1), [1, 2, 5, 3, 4])).toBe(true)
    expect(deepEqual(graph.bfsTraverse(2), [2, 1, 3, 5, 4])).toBe(true)
    expect(deepEqual(graph.bfsTraverse(3), [3, 2, 4, 1, 5])).toBe(true)
    expect(deepEqual(graph.bfsTraverse(4), [4, 3, 2, 1, 5])).toBe(true)
    expect(deepEqual(graph.bfsTraverse(5), [5, 1, 2, 3, 4])).toBe(true)
  })

  test('DFS Traverse', () => {
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    graph.addEdge(3, 4)
    graph.addEdge(1, 5)

    expect(deepEqual(graph.dfsTraverse(1), [1, 5, 2, 3, 4])).toBe(true)
    expect(deepEqual(graph.dfsTraverse(2), [2, 3, 4, 1, 5])).toBe(true)
    expect(deepEqual(graph.dfsTraverse(3), [3, 4, 2, 1, 5])).toBe(true)
    expect(deepEqual(graph.dfsTraverse(4), [4, 3, 2, 1, 5])).toBe(true)
    expect(deepEqual(graph.dfsTraverse(5), [5, 1, 2, 3, 4])).toBe(true)
  })

  test('getNumVertices', () => {
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    graph.addEdge(3, 4)
    graph.addEdge(1, 5)

    expect(graph.getNumVertices()).toBe(5)
  })

  test('getAdjList', () => {
    graph.addEdge(1, 2)
    graph.addEdge(2, 3)
    graph.addEdge(3, 4)
    graph.addEdge(1, 5)

    expect(deepEqual(graph.getVertices(), [1, 2, 3, 4, 5])).toBe(true)
  })

  test('topologicalSort', () => {
    let graph = new Graph(false)
    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(0, 4)
    graph.addEdge(1, 3)
    graph.addEdge(2, 3)
    graph.addEdge(1, 4)
    graph.addEdge(2, 4)
    graph.addEdge(3, 4)

    expect(deepEqual(graph.topologicalSort(1), [0, 1, 2, 3, 4])).toBe(true)
  })
})