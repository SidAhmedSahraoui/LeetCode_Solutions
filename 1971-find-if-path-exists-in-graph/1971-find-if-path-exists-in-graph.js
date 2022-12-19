/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    let adjList = {}, visited = [];

    for (const edge of edges){
        adjList[edge[0]] ? adjList[edge[0]].push(edge[1]) :
            adjList[edge[0]] = [edge[1]];
        
        adjList[edge[1]] ? adjList[edge[1]].push(edge[0]) :
            adjList[edge[1]] = [edge[0]];
        
    };

    const stack = [source];
    visited[source] = true;
    
    while(stack.length){
        const current = stack.pop();
        if(current === destination) return true;
        for(let neighbour of adjList[current]) {
            if(!visited[neighbour]){
                stack.push(neighbour);
                visited[neighbour] = true;
            }
        }
    }
    
    return false;
};