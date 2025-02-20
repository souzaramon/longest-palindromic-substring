function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i++] !== str[j--]) {
      return false;
    }
  }

  return true;
}

export function longestPalindromicSubstring(str) {
  let n = str.length;

  if (n === 0) return "";
  if (n === 1) return str;

  let result = "";

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j <= n - i; j++) {
      if (isPalindrome(str.slice(i, i + j))) {
        if (result.length < j) {
          result = str.slice(i, i + j);
        }
      }
    }
  }
  return result;
}
