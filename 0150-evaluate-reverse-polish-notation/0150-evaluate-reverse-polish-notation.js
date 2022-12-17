/**
 * @param {string[]} tokens
 * @return {number}
 */

let a, b
const evaluate = {"+": ()=>a+b, "-": ()=>a-b, "*": ()=>a*b, "/": ()=>~~(a/b)}

var evalRPN = function(tokens) {
    let stack = []
    for (let t of tokens) {
        if (evaluate[t]) {
            b = stack.pop(), a = stack.pop()
            stack.push(evaluate[t]())
        } else stack.push(~~t)
    }
    return stack[0]
};