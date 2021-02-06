const hundred = document.getElementById('hundred');
const fifty = document.getElementById('fifty');
const twenty = document.getElementById('twenty');
const ten = document.getElementById('ten');
const five = document.getElementById('five');
const one = document.getElementById('one');
const totals = document.getElementById('totals');
const totalsAmount = document.getElementById('totalsAmount');
const valuesArr = [100, 50, 20, 10, 5, 1];
const inputValsArr = [hundred, fifty, twenty, ten, five, one];

function displayTotals(arr = []) {
  totals.innerHTML =
    arr.map(el => {
      if (!el[1]) {
        el[1] = 0
      };
      return `<div class='dollar-amounts'> $${el[0]} x ${el[1]} = $ ${el[2]}</div>`;
    }).join('');
};

function getTotals(e) {
  e.preventDefault();
  let computedTotals = valuesArr.map((el, i,) => {
    return [valuesArr[i], inputValsArr[i].value, inputValsArr[i].value * el]
  });
  let combinedTotal = 0;
  valuesArr.forEach((val, i) => {
    combinedTotal += inputValsArr[i].value * val;
  });
  displayTotals(computedTotals);
  totalsAmount.innerText = `Combined total $${combinedTotal}`;
};

function resetForm() {
  document.querySelector('form').reset();
};

document.addEventListener('submit', getTotals);
document.addEventListener('reset', resetForm);
