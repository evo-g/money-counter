const hundred = document.getElementById('hundred');
const fifty = document.getElementById('fifty');
const twenty = document.getElementById('twenty');
const ten = document.getElementById('ten');
const five = document.getElementById('five');
const one = document.getElementById('one');
const totals = document.getElementById('totals');
const totalsAmount = document.getElementById('totalsAmount');
const valuesArr = [100,50,20,10,5,1];
const inputValsArr = [hundred, fifty, twenty, ten, five, one];

function displayTotals(arr = []) {
  totals.innerHTML =
    arr.map(el => {
      return `<li class='dollar-amounts'> ${el[0]}'s: -- $ ${el[1]}</li>`;
    }).join('');
};

function getTotals(e) {
  e.preventDefault();
  let computedTotals = valuesArr.map((el, i) => {
    return [valuesArr[i], inputValsArr[i].value * el]
  });
  let combinedTotal = 0;
  valuesArr.forEach((val, i) => {
    combinedTotal += inputValsArr[i].value * val;
  });
  displayTotals(computedTotals);
  totalsAmount.innerText = `Combined total $${combinedTotal}`;
};

document.addEventListener('submit', getTotals);
