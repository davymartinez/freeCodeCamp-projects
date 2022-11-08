/* eslint-disable no-console */
/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: 'INSUFFICIENT_FUNDS', change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: 'CLOSED', change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: 'OPEN', change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let changeDue = change;
  let currencies = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let currencyAvailable = [];
  let totalChange = [];
  let cidMoney = [];
  let cashRegister = {
    status: '',
    change: []
  };

  // create array from currency available on cid array
  function populateCurrAvail() {
    cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      currencyAvailable.push(cid[i][1]);
    }
  }

  // based on "greedy algorithm" to calculate coin change
  // returns an array containing our currency and respective amounts
  function populateCidMoney() {
    for (let i = 0; i < currencies.length; i++) {
      let used = 0; // variable to hold used coins and bills
      // original greedy algorithm is based on limitless available coins
      // here we use the currencyAvailable array to account for limited supply
      while (parseFloat(changeDue.toPrecision(4)) >= currencies[i] && currencyAvailable[i] > 0) {
        changeDue -= currencies[i];
        currencyAvailable[i] -= currencies[i];
        used += currencies[i];
        used = Math.round(used * 100) / 100; // rpund it to avoid long floats
        totalChange.push(parseFloat(Math.round(changeDue * 100) / 100).toFixed(2));
      }
      cid[i][1] = used;
      cidMoney.push(cid[i]);
    }
    return cidMoney;
  }

  // set final cash register object depending on stated conditions
  function setCashRegister() {
    let totalCurrAvailable = currencyAvailable.reduce((a, b) => a + b);
    let cidMoneyFilter = cidMoney.filter(pair => pair[1] != 0);
    if (cid > changeDue || totalCurrAvailable < changeDue || cidMoneyFilter[0][1] < changeDue) {
      cashRegister.status = 'INSUFFICIENT_FUNDS';
      cashRegister.change = [];
    } else if (cidMoneyFilter[0][1] == change && totalCurrAvailable <= 0) {
      cashRegister.status = 'CLOSED';
      cashRegister.change = cidMoney.reverse();
    } else {
      cashRegister.status = 'OPEN';
      cashRegister.change = cidMoneyFilter;
    }
  }

  populateCurrAvail();
  populateCidMoney();
  setCashRegister();

  // Here is your change, ma'am.
  return cashRegister;
}

console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]));