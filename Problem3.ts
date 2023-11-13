import { primeNumber } from "./Problem1";

const primaSegiEmpat = (wide: number, high: number, start: number): number | string | any => {
  let result = "";
  let totalPrimes = 0;
  for (let i = 0; i < high; i++) {
    let row = "";
    for (let j = 0; j < wide; j++) {
      while (!primeNumber(start)) {
        start++;
      }
      row += start + " ";
      totalPrimes += start;
      start++;
    }
    result += row.trim() + "\n";
  }
  result += totalPrimes;
  console.log(result);
};

primaSegiEmpat(5, 3, 13);
