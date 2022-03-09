let output = [];
// const array =[1, 3, 2, 6, -1, 4, 1, 8, 2]
const array = [1, 3, 2, 1];
// const k=5
for (let i = 0; i < array.length - 1; i++) {
  const avg = (array[i] + array[i + 1]) / 2;
  console.log(avg);
}
