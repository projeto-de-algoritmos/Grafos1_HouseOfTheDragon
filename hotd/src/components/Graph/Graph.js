export default class GraphModel
{
  constructor(node)
  {
    this.node = node;
    this.listAdj = new Map();
    this.links = 0;
  }

  findShortestPAth = (startNode, endNode) => 
  {
    const nodesQueue = [startNode];
    
    const visited = new Map();
    visited[startNode] = true;
    
    const links = new Map();
    links[startNode] = 0;

    const previous = new Map();
    previous[startNode] = null;

    const shortestPath = () => 
    {
      const pathStack = [Number(endNode)];
      let node = previous[endNode];

      while(node != startNode)
      {
        pathStack.push(node);
        node = previous[node];
      }
      pathStack.push(Number(startNode));
      return pathStack.reverse().join(" → ");
    }

    while(nodesQueue.length)
    {
      const vertex = Number(nodesQueue.shift());

      if(vertex != endNode)
      {
        const vertexList = this.listAdj.get(vertex);

        for(let node in vertexList)
        {
          const vNode = vertexList[node];

          if(!visited[vNode])
          {
            visited[vNode] = true;
            nodesQueue.push(vNode);
            links[vNode] = links[vertex] + 1;
            previous[vNode] = vertex;
          }
        }
      }
      else
        return shortestPath();
    }
    return false;
  }
}