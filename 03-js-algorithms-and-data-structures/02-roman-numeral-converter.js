/* eslint-disable no-console */

/* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  let ones = num % 10;
  let tens = num % 100 - ones;
  let hundreds = num % 1000 - tens - ones;
  let thousands = num % 10000 - hundreds - tens - ones;
  let romans = {
    0   : '',
    1   : 'I',
    5   : 'V',
    10  : 'X',
    50  : 'L',
    100 : 'C',
    500 : 'D',
    1000: 'M'
  };
  let romanOnes = romans[1];
  let romanTens = romans[10];
  let romanHundreds = romans[100];
  let romanThousands = romans[1000];
  let romansPostV = '';
  let romansPostL = '';
  let romansPostD = '';
  let errorMsg = 'Sorry, number cannot be higher than 3999.';

  // ones block
  switch (ones) {
  case 0:
    romanOnes = '';
    break;
  case 1: case 2: case 3:
    for (let i = 1; i < ones; i++) {
      romanOnes += romans[1];
    }
    break;
  case 4:
    romanOnes = romans[1] + romans[5];
    break;
  case 5: romanOnes = romans[5];
    break;
  case 6: case 7: case 8:
    for (let i = 6; i <= ones; i++) {
      romansPostV += romans[1];
    }
    romanOnes = romans[5] + romansPostV;
    break;
  case 9:
    romanOnes = romans[1] + romans[10];
    break;
  }

  // tens block
  switch (tens) {
  case 0:
    romanTens = '';
    break;
  case 10: case 20: case 30:
    for (let i = 10; i < tens; i+=10) {
      romanTens += romans[10];
    }
    break;
  case 40:
    romanTens = romans[10] + romans[50];
    break;
  case 50: romanTens = romans[50];
    break;
  case 60: case 70: case 80:
    for (let i = 60; i <= tens; i+=10) {
      romansPostL += romans[10];
    }
    romanTens = romans[50] + romansPostL;
    break;
  case 90:
    romanTens = romans[10] + romans[100];
    break;
  }
  // hundreds block
  switch (hundreds) {
  case 0:
    romanHundreds = '';
    break;
  case 100: case 200: case 300:
    for (let i = 100; i < hundreds; i+=100) {
      romanHundreds += romans[100];
    }
    break;
  case 400:
    romanHundreds = romans[100] + romans[500];
    break;
  case 500: romanHundreds = romans[500];
    break;
  case 600: case 700: case 800:
    for (let i = 600; i <= hundreds; i+=100) {
      romansPostD += romans[100];
    }
    romanHundreds = romans[500] + romansPostD;
    break;
  case 900:
    romanHundreds = romans[100] + romans[1000];
    break;
  }
  // thousands block
  switch (thousands) {
  case 0:
    romanThousands = '';
    break;
  case 1000: case 2000: case 3000:
    for (let i = 1000; i < thousands; i+=1000) {
      romanThousands += romans[1000];
    }
    break;
  }
  if (num > 3999) {
    return errorMsg;
  } else {
    return romanThousands + romanHundreds + romanTens + romanOnes;
  }
}

console.log(convertToRoman(3999)); // should return M