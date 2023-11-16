export const primeNumber = (angka: number): boolean | number => {
  if (angka < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
};

const primeX = (num: number) => {
  let dataPrimes: number[] = [];
  for (let i = 2; dataPrimes.length < num; i++) {
    if (primeNumber(i)) {
      dataPrimes.push(i);
    }
  }
  return dataPrimes[num - 1];
};

// console.log(primeX(5));
