/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let i = 0;
  let sign = 1;
  let res = 0;
  let len = s.length;
  let max = 2147483647;
  let min = - max - 1;

  while (s[i] === ' ') i++;

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }

  while (s[i] >= '0' && s[i] <= '9') {
    res = (res * 10) + (s[i] - 0);
    if (sign === 1 && res > max) return max;
    if (sign === -1 && res > max + 1) return min;
    i++;
  }

  return res * sign;
};