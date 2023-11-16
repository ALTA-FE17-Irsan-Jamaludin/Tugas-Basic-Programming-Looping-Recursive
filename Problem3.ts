import { primeNumber } from "./Problem1";

const primaSegiEmpat = (high: number, wide: number, start: number): void => {
  let totalPrimes = 0;
  for (let i = 0; i < high; i++) {
    let row = "";
    for (let j = 0; j < wide; j++) {
      while (!primeNumber(start)) {
        start++;
      }
      totalPrimes += start;
      row += start + " ";
      start++;
    }
    console.log(row);
  }
  console.log(totalPrimes);
};

primaSegiEmpat(2, 5, 1);
