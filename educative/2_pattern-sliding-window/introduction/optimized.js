const average = (k, arr) => {
  let result = [];
  let subArray = arr.slice(0, k);
  let sum = subArray.reduce((a, b) => a + b, 0);
  result.push(sum / k);

  for (i = 0; i < arr.length - k; i++) {
    let shiftedValue = subArray.shift();
    let pushedValue = arr[i + k];
    subArray.push(pushedValue);
    sum = sum - shiftedValue + pushedValue;
    result.push(sum / k);
  }

  return result;
};

const output = average(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(output);
