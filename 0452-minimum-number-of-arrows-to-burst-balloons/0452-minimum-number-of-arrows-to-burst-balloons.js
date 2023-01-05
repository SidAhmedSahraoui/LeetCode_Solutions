/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  let arrows = 1;
  points = points.sort((a,b) => a[1] - b[1])
  let endPoint = points[0][1]
  
  for (let i = 0; i < points.length; i++) {
    if (endPoint < points[i][0]) {
      arrows += 1
      endPoint = points[i][1]
    }
  }
  return arrows
};