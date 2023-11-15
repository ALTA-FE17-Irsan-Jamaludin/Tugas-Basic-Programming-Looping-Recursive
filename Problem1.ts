export const primeNumber = (angka: number): boolean | number => {
  if (angka === 1) {
    return false;
  } else if (angka === 2 || angka === 5) {
    return true;
  } else {
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0 || angka % 5 === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  return angka;
};

const primeX = (input: number): number => {
  let primeArray: number[] = [];
  for (let i = 2; primeArray.length < input; i++) {
    if (primeNumber(i)) {
      primeArray.push(i);
    }
  }
  return primeArray[input - 1];
};

console.log(primeX(5));
