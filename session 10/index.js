// function test(num1, num2) {
//   if (num1 == 15 || num2 == 15 || num1 + num2 == 15) {
//     // return true;
//     console.log(true);
//   } else {
//     // return false;
//     console.log(false);
//   }
// }

// console.log(test(5, 15));
// console.log(test(10, 5));
// console.log(test(5, 5));
// test(5, 15);
// test(10, 5);
// test(5, 5);
// end of test

// function squar(n) {
//   var flag = 0;
//   for (var i = 0; i <= n; i++) {
//     if (i * i == n) {
//       flag = 1;
//       console.log(true);
//       break;
//     }
//   }
//   if (flag == 0) {
//     console.log("False");
//   }
// }
// squar(0);
// squar(15);
// squar(100);

// function chek(array) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] != i + 1) {
//       console.log(i + 1);
//     }
//   }
// }
// chek([1, 2, 0, 4, 5]);

// function chek(n1, n2) {
//   var sum = 0;
//   for (let i = n1; i < n2; i++) {
//     if (i % 2 != 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(chek(10, 30));
// console.log(chek(0, 10));

// let arr = [432];

// function calc(number) {
//   let calc = String(number);
//   console.log(calc[0]);
// }
// calc(432);
// calc(12);

// function countnmu(arr) {
//   let positivenum = 0;
//   let negaitivenum = 0;
//   let evennum = 0;
//   let oodnum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > 0) {
//       positivenum++;
//       if (num % 2 === 0) {
//         evennum++;
//       } else {
//         oodnum++;
//       }
//     } else if (num < 0) {
//       negaitivenum++;
//       if (num % 2 === 0) {
//         evennum++;
//       } else {
//         oodnum++;
//       }
//     } else {
//       evennum++;
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

function test(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] == Number(arr[i]) ? x.push(arr[i]) : console.log("error");
    // Number note
  }
  console.log(x);
}
test([1, NaN, -2, "a", "aba"]);
