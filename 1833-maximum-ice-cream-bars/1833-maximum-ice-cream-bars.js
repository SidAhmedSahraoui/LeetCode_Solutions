/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b)
    
    for (let i = 0; i < costs.length; i++) {
        if (coins >= costs[i]) {
            coins -= costs[i]
        } else {
            return i
        }
    }
    
    return costs.length
}