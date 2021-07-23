function isPalindrome(string) {
  let a = 0;
  let z = string.length - 1;
  while (a !== z) {
    if (string[a] !== string[z]) {
      return false;
    }
    a++;
    z--;
  }
  return true;
}

console.log(isPalindrome("kayak"));
