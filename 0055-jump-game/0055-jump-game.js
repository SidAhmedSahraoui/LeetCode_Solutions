/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Keep track of max distance traveled so far
    let max = 0;
    for(let i=0;i<nums.length;i++){
        // The only time that max < i is when we are at 0 and we cannot move forward
        if(i>max) return false;
        // Move the max pointer the maximum 
        max = Math.max(nums[i]+i,max);
    }
    // If we did not get stuck at a 0 then return true
    return true;
};