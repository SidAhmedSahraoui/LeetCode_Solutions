/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    let s = x.toString();
    let t = ""
    let i = s.length - 1; 
    if(s === '0') return 0;
    while(s[i] === '0'){
      s = s.substr(0,i);
      i++;
    }
    if(s[0] === '-'){
       s = s.substr(1,s.length).concat('-')
      };
    
    for(let i of s){
      t = i.concat(t)
    }
    t = parseInt(t)
    if(t > Math.pow(2, 31) - 1 || t < -Math.pow(2, 31)) return 0;
    return t
};