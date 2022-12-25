/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
nums.sort((a,b)=>a-b)
let sum=[]
let acc=0;
for(let el of nums){
    acc +=el;
    sum.push(acc);
}
    let result=[]
    for(let el of queries){
        result.push(find(sum,el))
    }
    return result
};
const find=(arr,target)=>{
let left=0;
let right=arr.length-1;
    if(target>=arr[right]){
        return arr.length
    }
    if(target<arr[left]){
        return 0;
    }
    let mid=Math.floor((right+left)/2)
while(right>left){
    if(target<arr[mid]){
        right=mid-1
    }else if(target>arr[mid]){
        left=mid+1
    }else if(target==arr[mid]){
        return mid+1
    }
      mid=Math.floor((right+left)/2)
}
    if(target>arr[mid]){
        return mid+1
    }else{
        return mid
    }
}