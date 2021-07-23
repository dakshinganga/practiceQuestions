function reverseString(string) {
  const revstr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    revstr.push(string[i]);
  }

  return revstr.join("");
}

console.log(reverseString("Daksh"));
