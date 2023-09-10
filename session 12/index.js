// let table = document.createElement("Table");
// let tr = document.createElement("Tr");
// let th = document.createElement("Th");
// let tr1 = document.createElement("Tr");
// let th1 = document.createElement("Th");
// table.setAttribute("border", "1");
// document.body.appendChild(table);
// table.appendChild(tr);
// tr.appendChild(th);
// tr.appendChild(th1);
// th.textContent = "Name";

// table.appendChild(tr1);
// tr1.appendChild(th);
// tr1.appendChild(th1);
// th1.innerHTML = "Name";

// let table1 = document.createElement("Table");
// // let tr = document.createElement("Tr");
// let th = document.createElement("Th");
// table.setAttribute("border", "1");
// document.body.appendChild(table);
// table.appendChild(tr);
// tr.appendChild(th);
// th.innerHTML = "Name";

function checkWinner(board) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== "-" &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return board[i][0];
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] !== "-" &&
      board[0][j] === board[1][j] &&
      board[0][j] === board[2][j]
    ) {
      return board[0][j];
    }
  }

  // Check diagonals
  if (
    board[0][0] !== "-" &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return board[0][0];
  }
  if (
    board[0][2] !== "-" &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return board[0][2];
  }

  // No winner
  return "No winner";
}

const board1 = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"],
];
console.log(checkWinner(board1)); // Output: X

const board2 = [
  ["O", "O", "X"],
  ["X", "X", "O"],
  ["O", "O", "O"],
];
console.log(checkWinner(board2)); // Output: O

const board3 = [
  ["X", "O", "X"],
  ["O", "X", "X"],
  ["O", "X", "X"],
];
console.log(checkWinner(board3));
