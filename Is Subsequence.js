/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
  let ptr = 0;

  for (loop = 0; loop < t.length; loop++)
    if (t[loop] === s[ptr]) ptr += 1;
  return ptr === s.length;
};

console.log(isSubsequence([1, 6, -1, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
