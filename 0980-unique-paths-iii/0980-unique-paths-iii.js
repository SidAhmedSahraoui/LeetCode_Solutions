/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let startX, startY;
    let n = grid.length;
    let m = grid[0].length;
    let emptyBlocks = 1;
    
    for(let i = 0 ; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(grid[i][j] === 1) startX = i, startY = j;
            else if(grid[i][j] === 0) emptyBlocks++;
        }
    }
    
    function dfs(x, y, count) {
        if(x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === -1 || grid[x][y] == 'Visited') return 0;
        
        if(grid[x][y] === 2 && count === emptyBlocks) return 1;
        
        let oldValue = grid[x][y];
        grid[x][y] = 'Visited'; // mark as visited
        
        let result = 0;
        
        result += dfs(x + 1, y, count + 1) + dfs(x - 1, y, count + 1) + dfs(x, y + 1, count + 1) + dfs(x, y - 1, count + 1);
        
        grid[x][y] = oldValue; // mark as empty now
        return result;
    }
    
    return dfs(startX, startY, 0);
};