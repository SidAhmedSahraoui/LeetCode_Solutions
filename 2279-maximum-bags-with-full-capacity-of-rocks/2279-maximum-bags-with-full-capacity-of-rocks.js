/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    const rest = [];
    let res = 0;
    for(let i = 0; i < capacity.length; i++){
        rest.push(capacity[i] - rocks[i])
    }
    rest.sort((a,b) => a - b)
    
    for(let i = 0; i< rest.length; i++) {
        additionalRocks = additionalRocks - rest[i]
        if(additionalRocks >= 0) {
            res++
        } else {
            break
        }
    }
    return res
};