function test(num1, num2) {
  if (num1 == 15 || num2 == 15 || num1 + num2 == 15) {
    // return true;
    console.log(true);
  } else {
    // return false;
    console.log(false);
  }
}
console.log(test(5, 15));
console.log(test(10, 5));
console.log(test(5, 5));
test(5, 15);
test(10, 5);
test(5, 5);
function squar(n) {
  var flag = 0;
  for (var i = 0; i <= n; i++) {
    if (i * i == n) {
      flag = 1;
      console.log(true);
      break;
    }
  }
  if (flag == 0) {
    console.log("False");
  }
}
squar(0);
squar(15);
squar(100);
//
function chek(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] != i + 1) {
      console.log(i + 1);
    }
  }
}
chek([1, 2, 0, 4, 5]);

function chek(n1, n2) {
  var sum = 0;
  for (let i = n1; i < n2; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(chek(10, 30));
console.log(chek(0, 10));
