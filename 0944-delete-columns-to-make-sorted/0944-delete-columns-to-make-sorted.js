/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(A) {
  let count = 0;
  for (let i = 0; i < A[0].length; i++) {
    let m = 0;
    for (let j = 0; j < A.length-1; j++) {
      if (A[j].charCodeAt(i) > A[j+1].charCodeAt(i))
        m++
    }
    if(m !== 0)
      count++;
  }
  return count;
};