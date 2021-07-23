function reverseArray(arr) {
  const revearr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revearr.push(arr[i]);
  }
  return revearr;
}

console.log(reverseArray([1, 2, 3]));
