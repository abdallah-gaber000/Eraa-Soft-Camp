// 1
// function calc(number) {
//   let calc = String(number);
//   console.log(calc[0]);
// }
// calc(432);
// calc(12);

/////////////////////////////// 2
// function countnmu(arr) {
//   let positivenum = 0;
//   let negaitivenum = 0;
//   let evennum = 0;
//   let oodnum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > 0) {
//       positivenum++;
//     } else if (num < 0) {
//       negaitivenum++;
//     }
//     if (num % 2 === 0) {
//       evennum++;
//     } else {
//       oodnum++;
//     }
//   }
//   return [positivenum, negaitivenum, evennum, oodnum];
// }

// console.log(countnmu([5, 7, -2, 0, 4, -8, -3, 6]));

// function test(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0
//       ? console.log("Positive", arr[i])
//       : console.log("Negative", arr[i]);
//     arr[i] % 2 === 0 ? console.log("even", arr[i]) : console.log("odd", arr[i]);
//   }
// }
// test([5, 7, -2, 0, 4, -8, -3, 6]);
//////////////////////////////////////////////3
// function test(arr) {
//   let x = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] == Number(arr[i]) ? x.push(arr[i]) : console.log("error");
//     // Number note
//   }
//   console.log(x);
// }
// test([1, NaN, -2, "a", "aba"]);

////////////////////////////////////////////////4
// function slice(arr, start, end) {
//   if (start === undefined) {
//     start = 0;
//   }
//   if (end === undefined) {
//     end = arr.length;
//   }
//   return arr.slice(start, end);
// }
// let arr = [1,2,3,4];
// let result = slice((arr),1,3);
// console.log(result);

/////////////////////////////////////////////////////5
// function LargestNumbers(arrays) {
// let largestNumbers = [];
//
// for (let i = 0; i < arrays.length; i++) {
// let largest = arrays[i][0];
//
// for (let j = 1; j < arrays[i].length; j++) {
// if (arrays[i][j] > largest) {
// largest = arrays[i][j];
// }
// }
//
// largestNumbers.push(largest);
// }
//
// return largestNumbers;
// }
//
// let input =  [[1, 2, 3, 4], [45, 73, 12], [13, 13, 10]];
// let output = LargestNumbers(input);
// console.log(output);

///////////////////////////////////6
// function printString(string) {
// if (string.length <= 10) {
// console.log(string);
// } else {
// let longString = string.charAt(0) + (string.length - 2) + string.charAt(string.length - 1);
// console.log(longString);
// }
// }
// printString('addddddsfa')

var arr = ["a", "b", "c", "a", "d"];
// arr.slice(0);
// arr.concat(0, 2);
arr.sort();
console.log(arr);
