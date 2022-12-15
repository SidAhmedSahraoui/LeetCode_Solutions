/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let num = []
    for(let i=0; i<nums.length; i++){
        num = nums.slice(i)
        for(let j=0; j<num.length; j++){
            if(num[j]+nums[i] === target && i !== nums.indexOf(num[j])){
                return [i, nums.indexOf(num[j])];
               
            }
        }
    }
};