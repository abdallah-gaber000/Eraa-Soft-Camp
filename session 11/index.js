// function calc(number) {
//   let calc = String(number);
//   console.log(calc[0]);
// }
// calc(432);
// calc(12);

function countnmu(arr) {
  let positivenum = 0;
  let negaitivenum = 0;
  let evennum = 0;
  let oodnum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 0) {
      positivenum++;
      // if (num % 2 === 0) {
      //   evennum++;
      // } else {
      //   oodnum++;
      // }
    } else if (num < 0) {
      negaitivenum++;
    }
    if (num % 2 === 0) {
      evennum++;
    } else {
      oodnum++;
    }
  }
  return [positivenum, negaitivenum, evennum, oodnum];
}

console.log(countnmu([5, 7, -2, 0, 4, -8, -3, 6]));

// function test(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0
//       ? console.log("Positive", arr[i])
//       : console.log("Negative", arr[i]);
//     arr[i] % 2 === 0 ? console.log("even", arr[i]) : console.log("odd", arr[i]);
//   }
// }
// test([5, 7, -2, 0, 4, -8, -3, 6]);

// function test(arr) {
//   let x = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] == Number(arr[i]) ? x.push(arr[i]) : console.log("error");
//     // Number note
//   }
//   console.log(x);
// }
// test([1, NaN, -2, "a", "aba"]);
