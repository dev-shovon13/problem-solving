const findMax = (arr, k) => {
  let subArray = arr.slice(0, k);
  let sum = subArray.reduce((a, b) => a + b);
  let maxSum = sum;

  for (let i = 0; i < arr.length - k; i++) {
    let shiftedValue = subArray.shift();
    let pushedValue = arr[i + k];
    subArray.push(pushedValue);
    sum = sum - shiftedValue + pushedValue;
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};
let sum = findMax([2, 1, 5, 1, 3, 2], 3);
console.log(sum);
