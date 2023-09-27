// let img = document.createElement("img");
// img.setAttribute("src", "1.png");
// img.setAttribute("alt", "img");
// document.body.append("img");
// console.log(img);

let table = document.createElement("table");
let tr1 = document.createElement("tr");
let tr2 = document.createElement("tr");

let th1 = document.createElement("th");
th1.textContent = "name";

let th2 = document.createElement("th");
th2.textContent = "age";

let td1 = document.createElement("td");
td1.textContent = "abdallah";

let td2 = document.createElement("td");
td2.textContent = "21";
// table.style.border = "1px";
table.setAttribute("border", "1");
table.append(tr1);
table.append(tr2);

tr1.append(th1);
tr1.append(th2);

tr2.append(td1);
tr2.append(td2);
console.log(table);
document.body.append(table);

// function checkWinner(board) {
//   // Check rows
//   for (let i = 0; i < 3; i++) {
//     if (
//       board[i][0] !== "-" &&
//       board[i][0] === board[i][1] &&
//       board[i][0] === board[i][2]
//     ) {
//       return board[i][0];
//     }
//   }

//   // Check columns
//   for (let j = 0; j < 3; j++) {
//     if (
//       board[0][j] !== "-" &&
//       board[0][j] === board[1][j] &&
//       board[0][j] === board[2][j]
//     ) {
//       return board[0][j];
//     }
//   }

//   // Check diagonals
//   if (
//     board[0][0] !== "-" &&
//     board[0][0] === board[1][1] &&
//     board[0][0] === board[2][2]
//   ) {
//     return board[0][0];
//   }
//   if (
//     board[0][2] !== "-" &&
//     board[0][2] === board[1][1] &&
//     board[0][2] === board[2][0]
//   ) {
//     return board[0][2];
//   }

//   // No winner
//   return "No winner";
// }

// const board1 = [
//   ["X", "O", "X"],
//   ["O", "X", "O"],
//   ["O", "X", "X"],
// ];
// console.log(checkWinner(board1)); // Output: X

// const board2 = [
//   ["O", "O", "X"],
//   ["X", "X", "O"],
//   ["O", "O", "O"],
// ];
// console.log(checkWinner(board2)); // Output: O

// const board3 = [
//   ["X", "O", "X"],
//   ["O", "X", "X"],
//   ["O", "X", "X"],
// ];
// console.log(checkWinner(board3));
