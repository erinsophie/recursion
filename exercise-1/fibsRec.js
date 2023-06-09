function fibsRec(n) {
  if (n === 0) return 'Inavlid input';
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);
  return arr.concat(arr[arr.length - 1] + arr[arr.length - 2]);
}

console.log(fibsRec(1)); // [ 0 ]
console.log(fibsRec(2)); // [ 0, 1 ]
console.log(fibsRec(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
