/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  let diff = Infinity
  let result = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      const currentDiff = sum - target
      if (currentDiff > 0) {
        right -= 1
      } else {
        left += 1
      }
      if (Math.abs(currentDiff) < diff) {
        result = sum
      }
      diff = Math.min(Math.abs(currentDiff), diff)
    }
  }
  return result
}