// Tic Tac Toe: Refactor to hooks
import React from 'react'

class Board extends React.Component {
  state = {squares: Array(9).fill(null), xIsNext: true}

  selectSquare(square) {
    const {squares, xIsNext} = this.state
    if (calculateWinner(squares) || squares[square]) {
      return
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = xIsNext ? 'X' : 'O'
    this.setState(prevState => ({
      xIsNext: !prevState.xIsNext,
      squares: squaresCopy,
    }))
  }
  renderSquare = i => (
    <button className="square" onClick={() => this.selectSquare(i)}>
      {this.state.squares[i]}
    </button>
  )

  render() {
    const {squares, xIsNext} = this.state
    const winner = calculateWinner(squares)

    let status
    if (winner) {
      status = `Winner: ${winner}`
    } else if (squares.every(Boolean)) {
      status = `Scratch: Cat's game`
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Usage() {
  return <Game />
}
Usage.title = 'Tic Tac Toe: Advanced State'

export default Usage
