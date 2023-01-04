/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let obj = {}
    for(let i of tasks) {
        obj[i] = (obj[i] || 0) + 1
    }

    let loop = 0
    for(let prop in obj) {
        if(obj[prop] === 1) return -1; 
        loop += Math.ceil(obj[prop]/3)
    }
 
    return loop
};