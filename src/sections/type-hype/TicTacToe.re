type token = | X | O | Empty;
type row = (token, token, token);
type board = (row, row, row);
type player =| X | O;

type progress =
  | Turn(player)
  | Win(player)
  | Draw;

type ticTacToeState = {
  board,
  progress
};
let game = Turn(X);

switch game {
| Turn(p) => "Player" ++ (p_to_str(p) ++ "'s turn")
| Winner(p) => "Player" ++ (p_to_str(p) ++ "won")
| Draw => "It's a draw!"
};

let p_to_str = (player) =>
switch player {
| X => "X"
| O => "O"
};