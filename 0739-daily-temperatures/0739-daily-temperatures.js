/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures = []) => {
  const stack = []
  const result = new Array(temperatures.length).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[i] > temperatures[stack[stack.length - 1]] && stack.length > 0) {
      const index = stack.pop()
      result[index] = i - index
    }
    stack.push(i)
  }
  return result
}