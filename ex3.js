let gridSize = 8;

let chessboard = "";

for (let y = 0; y < gridSize; y++) {
  for (let x = 0; x < gridSize; x++) {
    //creates checkered pattern
    if ((x + y) % 2 == 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
