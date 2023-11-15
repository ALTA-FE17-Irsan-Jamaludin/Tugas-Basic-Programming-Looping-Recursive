import { primeNumber } from "./Problem1";

const primaSegiEmpat = (high: number, wide: number, start: number): void => {
  let result: number = 0;
  let totalPrimes: number = 0;

  for (let i = 0; i < high; i++) {
    let baris: string = `Baris ${i + 1} : `;
    for (let j = 0; j < wide; j++) {
      while (!primeNumber(start)) {
        start++;
      }
      baris += `${start}` + " ";
      totalPrimes += start;
      start++;
    }
    console.log(baris);
  }
  result += totalPrimes;
  console.log(result);
};

primaSegiEmpat(5, 5, 13);
