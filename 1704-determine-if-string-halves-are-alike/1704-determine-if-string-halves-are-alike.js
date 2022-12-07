/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
        let a = s.substr(0,s.length/2)
    let b = s.substr(s.length/2)
    let ai = 0;
    let bj = 0;
    for(let i=0; i<= a.length; i++) {
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(a[i]) ) ai++;
    }
    for(let j=0; j<= b.length; j++) {
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(b[j]) ) bj++;
    }
    if (ai === bj) return true;
    return false;
};