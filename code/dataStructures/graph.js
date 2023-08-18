class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    const v2Idx = this.adjacencyList[v1].findIndex((idx) => idx === v2);
    this.adjacencyList[v1].splice(v2Idx, 1);
    const v1Idx = this.adjacencyList[v2].findIndex((idx) => idx === v1);
    this.adjacencyList[v2].splice(v1Idx, 1);
  }
  removingVertex(vertex) {
    const relations = this.adjacencyList[vertex];

    for (let vertex2 of relations) {
      this.removeEdge(vertex, vertex2);
    }
    delete this.adjacencyList[vertex];
  }
  DFSrecursive(vertex) {
    const resultList = [];
    const visited = {};

    const DFS = (vertex) => {
      if (!this.adjacencyList[vertex]) return null;
      resultList.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return DFS(neighbour);
        }
      });
    };

    DFS(vertex);

    return resultList;
  }
  DFSiterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.table(g);
console.table(g.DFSiterative("A"));
