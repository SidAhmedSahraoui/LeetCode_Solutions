/**
 * @param {string} s
 * @return {string}
 */

const getPal = (left, right, s) => {
    while(left >= 0 && right < s.length ) {
        if(s[left] !== s[right]) break;
        left--;
        right++;
    }
    return [left + 1, right]
}
var longestPalindrome = function(s) {
    let res = [0,1]
    for(let i = 0; i < s.length; i++){
        let even = getPal(i-1,i+1,s);
        let odd = getPal(i,i+1,s);
        let curMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
        res = curMax[1] - curMax[0] > res[1] - res[0] ? curMax : res;
    }


    return s.slice(res[0], res[1])
};