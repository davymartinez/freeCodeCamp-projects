/* eslint-disable no-console */

/* Return true if the given string is a palindrome. Otherwise, return false.
Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2". */

/*
pseudocode
function palindrome(str)
  replace all non-alphanumeric str characters with a regexp
  change all letters of str to lowercase
  create reverse str by splitting, reversing and joining back the regexp str
  if regexp str and reverse str are equal
    return true
  else return false
*/

function palindrome(str) {
  let reStr = str.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
  let revStr = reStr.split('').reverse().join('');
  if (reStr == revStr) {
    return true;
  }
  return false;
}

palindrome('2_A3*3#A2');