function emptyIndexies(board) {
  return board
    .map((s, i) => {
      if (s === null) {
        return i;
      }
    })
    .filter(s => s !== undefined);
}
const arr = [null, null, "X", null, null, "O", null, "O", "X"];

console.log(emptyIndexies(arr));
