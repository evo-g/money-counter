const assert = require('assert');
const valuesArr = [100, 50, 20, 10, 5, 1];
const exmpInput = [2, 1, 1, 1, 1, 1];

function getTotals(arr) {
  let combinedTotal = 0;
  valuesArr.forEach((val, i) => {
    combinedTotal += arr[i] * val;
  });
  return valuesArr;
}

describe('getTotals', () => {
  it('it should multiply numbers', () => {
    assert(getTotals(exmpInput), [200, 50, 20, 10, 5, 1])
  });
});
