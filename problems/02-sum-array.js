/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  else {
    return sumArray(arr.slice(1)) + arr[0];
  }
}


//arr.slice(1) happens first and essentially goes thru length of array such that first loop --> goes from [1,2,3] to [2,3] then next loop is from [2,3] to just [3] then from [3] to []
//THEN you start with [3] (bc 3 is at top of your stack rn) and that is your current arr[0], next 2 comes back in to arr and is your new arr[0] and is added to previous arr[0] which was 3
//THEN same happens when you get back to 1 (which was at the bottom of your stack) --> now have [1,2,3] again and 1 (your new arr[0]) is added to your previous two arr[0]'s (2 and 3)


// Examples:

console.log(sumArray([1, 2, 3])); //  6
console.log(sumArray([0, 1, -3])); //  -2
console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
