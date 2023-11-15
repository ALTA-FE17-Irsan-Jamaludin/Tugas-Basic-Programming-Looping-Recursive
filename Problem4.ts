const maxSequence = (arrData: number[]): number => {
  let maxEnd = arrData[0];
  let maxNow = arrData[0];

  for (let i = 1; i < arrData.length; i++) {
    maxEnd = Math.max(arrData[i], maxEnd + arrData[i]);
    maxNow = Math.max(maxNow, maxEnd);
  }
  return maxNow;
};

const input1: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const output1 = maxSequence(input1);
console.log("Output:", output1); // Output: 6
