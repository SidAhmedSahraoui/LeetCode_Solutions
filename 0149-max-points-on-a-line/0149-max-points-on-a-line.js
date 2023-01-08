/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length == 1) return 1;
    
    let max = 2;

    function angle(cx, cy, ex, ey) {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); 
        theta *= 180 / Math.PI; 
        return theta;
    }

    for(let i = 0; i<points.length;i++){
        let map = {}
        for(let j =0;j<points.length;j++){
            if(i == j) continue;
            let diff = angle(points[i][0], points[i][1], points[j][0],points[j][1])
            map[diff] = map[diff] ? map[diff] + 1 : 2
        }
        max = Math.max(max, ...Object.values(map))
    }
    return max;
};