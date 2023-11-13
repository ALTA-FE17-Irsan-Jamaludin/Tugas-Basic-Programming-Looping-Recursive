const fibonacci = (num: number): number | any => {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(4)); // 0
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(9)); // 34
// console.log(fibonacci(10)); // 55
// console.log(fibonacci(12)); // 144
