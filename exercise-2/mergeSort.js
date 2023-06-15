function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];

  // if either left or right is empty, stop looping
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right[0]);
      right.shift();
    } else {
      result.push(left[0]);
      left.shift();
    }
  }

  // if left is not empty, then right is empty
  // push first element of left into right
  // remove first element from left
  while (left.length > 0) {
    result.push(left[0]);
    left.shift();
  }

  while (right.length > 0) {
    result.push(right[0]);
    right.shift();
  }
  return result;
}

console.log(mergeSort([2, 1, 2, 1, 1, 2])); // [ 1, 1, 1, 2, 2, 2 ]
console.log(mergeSort([3, 2, 1, 3, 7, 5])); // [ 1, 2, 3, 3, 5, 7 ]
console.log(mergeSort([4, 2, 16, 10, 11, 8, 9])); // [ 2, 4, 8, 9, 10, 11, 16 ]
