// Tic Tac Toe board represented as a one-dimensional array
const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Returns true if the board is full, false otherwise
function isFull(board) {
  return board.every(slot => slot !== 0);
}

// Returns true if the player has won, false otherwise
function checkWin(board, player) {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] === player && board[i+1] === player && board[i+2] === player) {
      return true;
    }
  }
  
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[i] === player && board[i+3] === player && board[i+6] === player) {
      return true;
    }
  }
  
  // Check diagonals
  if (board[0] === player && board[4] === player && board[8] === player) {
    return true;
  }
  
  if (board[2] === player && board[4] === player && board[6] === player) {
    return true;
  }
  
  // If no win condition has been met, return false
  return false;
}

// The evaluate function for Tic Tac Toe
function evaluate(board) {
  const weights = [3, 2, 3, 2, 4, 2, 3, 2, 3];
  let score = 0;
  
  for (let i = 0; i < 9; i++) {
    if (board[i] === 1) {
      score += weights[i];
    } else if (board[i] === 2) {
      score -= weights[i];
    }
  }
  
  if (checkWin(board, 1)) {
    score += 1000;
  } else if (checkWin(board, 2)) {
    score -= 1000;
  }
  
  return score;
}

// The alpha-beta pruning algorithm for Tic Tac Toe
function alphaBetaPruning(board, depth, alpha, beta, maximizingPlayer) {
  if (checkWin(board, 1)) {
    return 1000 - depth; // if X wins, return a high score
  } else if (checkWin(board, 2)) {
    return -1000 + depth; // if O wins, return a low score
  } else if (isFull(board)) {
    return 0; // if the board is full, return a neutral score
  }
  
  if (maximizingPlayer) {
    let maxEval = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === 0) {
        board[i] = 1; // set the slot to X
        const eval = alphaBetaPruning(board, depth+1, alpha, beta, false);
        board[i] = 0; // reset the slot to empty
        maxEval = Math.max(maxEval, eval);
        alpha = Math.max(alpha, eval);
        if (beta <= alpha) {
          break; // beta cutoff
        }
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < 9; i++){
        if (board[i] === 0) {
            board[i] = 2; // set the slot to O
            const eval = alphaBetaPruning(board, depth+1, alpha, beta, true);
            board[i] = 0; // reset the slot to empty
            minEval = Math.min(minEval, eval);
            beta = Math.min(beta, eval);
            if (beta <= alpha) {
              break; // alpha cutoff
            }
          }
        }
        return minEval;
    }
}


const bestMove = (board) => {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < 9; i++) {
    if (board[i] === 0) {
    board[i] = 1; // set the slot to X
    const score = alphaBetaPruning(board, 0, -Infinity, Infinity, false);
    board[i] = 0; // reset the slot to empty
    if (score > bestScore) {
    bestScore = score;
    move = i;
    }
    }
    }
    return move;
    };



const xMove = bestMove(board);
board[xMove] = 1;

// Make a move for O
const oMove = bestMove(board);
board[oMove] = 2;