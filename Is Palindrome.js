/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  let xString = x.toString();
  let left = 0;
  let right = xString.length - 1;
  for (let count = 0; count < xString.length; count++) {
    if (xString[left] === xString[right]) {
      left = left + 1;
      right = right - 1;
    } else {
      return false;
    }
  }

  return true;
};
