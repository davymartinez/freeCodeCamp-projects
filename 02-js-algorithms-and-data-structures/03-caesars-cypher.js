/* eslint-disable no-console */
/* Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
// rot13("SERR CVMMN!") should decode to FREE PIZZA!
// rot13("SERR YBIR?") should decode to FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. */

/*
pseudocode
For every char in string:
  if char code is between 65 and 78:
    Substract 13 from char code
    Push new char code into array B
  else if char code is between 79 and 90:
    Add 13 to char code
    Push new char code into array B
  else if char code is higher than 90 do nothing to it
Join array B
Return new decoded string
*/

function rot13(str) { // LBH QVQ VG!
  let rotStr = '';
  let rotArr = [];

  for (let i = 0; i < str.length; i++) {
    if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 77) {
      rotArr.push(String.fromCharCode(str.charCodeAt(i)+13));
    } else if (78 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
      rotArr.push(String.fromCharCode(str.charCodeAt(i)-13));
    } else if (str.charCodeAt(i) <= 91) {
      rotArr.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }

  rotStr = rotArr.join('');

  return rotStr;
}

// Change the inputs below to test
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));