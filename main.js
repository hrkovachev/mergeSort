let arr = [1, 3, 5, 2, 8, 6, 11];

function mergeSort(arr) {
  // split
  if (arr.length === 0 || arr.length === 1) return arr;
  let left = arr.slice(0, Math.ceil(arr.length / 2));
  let right = arr.slice(Math.ceil(arr.length / 2));
  if (left.length > 1) left = mergeSort(left);
  if (right.length > 1) right = mergeSort(right);
  // sorting
  const returnArr = [];
  let l, r;
  while (left.length > 0 && right.length > 0) {
    l = left.shift();
    r = right.shift();
    if (l > r) {
      returnArr.push(r);
      left.unshift(l);
    } else {
      returnArr.push(l);
      right.unshift(r);
    }
    if (left.length === 0) returnArr.push(...right);
    if (right.length === 0) returnArr.push(...left);
  }
  return returnArr;
}

console.log(mergeSort([arr]));
