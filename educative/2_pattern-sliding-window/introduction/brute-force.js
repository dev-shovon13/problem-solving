let output = [];
const array = [1, 3, 2, 6, -1, 4, 1, 8, 2];
let sum = 0;
let avg = 0;
const k = 5;
for (let i = 0; i < array.length - (k - 1); i++) {
  for (let j = 0; j < k; j++) {
    sum += array[i + j];
  }
  avg = sum / k;
  output.push(avg);
  sum = 0;
}
console.log(output);
