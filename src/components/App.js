import React, {useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 

const App = () => {

  const moveLeft = (matrix) => {
    matrix.forEach((row, rowIndex) => {
      const zeroIndex = row.indexOf(0);
        if (zeroIndex !== -1) {
          row.forEach((cell, cellIndex) => {
            row.splice(row.indexOf(0), 1);
            row.push(0);
          })
        }
    })
  }

  const sumLeft = (matrix) => {
    matrix.forEach((row,rowIndex) => {
      row.forEach((cell,cellIndex) => {
        if(cellIndex !== 0) {
          if (matrix[rowIndex][cellIndex - 1] === matrix[rowIndex][cellIndex]) {
            matrix[rowIndex][cellIndex - 1] = matrix[rowIndex][cellIndex]+matrix[rowIndex][cellIndex - 1];
            matrix[rowIndex][cellIndex] = 0;
          }
        }
      })
    })
  }

  const moveUp = (matrix) => {
    var zeros = [0,0,0,0]
    matrix.forEach((row,rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === 0) {
          zeros[cellIndex] = zeros[cellIndex] + 1
          console.log(zeros)
        }
        if (row !== 0 && cell !== 0) {
          matrix[rowIndex - zeros[cellIndex]][cellIndex] = matrix[rowIndex][cellIndex]
        }
        if (zeros[cellIndex] !== 0){
          matrix[rowIndex][cellIndex] = 0
        }
      })

    })
  }

  const sumUp = (matrix) => {
    matrix.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (rowIndex !== 0) {
          if(matrix[rowIndex - 1][cellIndex] === matrix[rowIndex][cellIndex]) {
            matrix[rowIndex - 1][cellIndex] = matrix[rowIndex][cellIndex] + matrix[rowIndex-1][cellIndex]
            matrix[rowIndex][cellIndex] = 0
          }
        }
      })
    })
  }

  const moveRight = (matrix) => {
    matrix.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === 0) {
          row.splice(cellIndex, 1);
          row.unshift(0);
        }
      })
    })
  }

  const sumRight = (matrix) => {
    matrix.forEach((row,rowIndex) => {
      row.reverse().forEach((cell,cellIndex) => {
        if(cellIndex !== 0) {
          if (matrix[rowIndex][cellIndex - 1] === matrix[rowIndex][cellIndex]) {
            matrix[rowIndex][cellIndex - 1] = matrix[rowIndex][cellIndex]+matrix[rowIndex][cellIndex - 1];
            matrix[rowIndex][cellIndex] = 0;
          }
        }
      })
    row.reverse()
    })
  }

  const moveDown = (matrix) => {
    var zeros = [0,0,0,0]
    matrix.reverse().forEach((row,rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (cell === 0) {
          zeros[cellIndex] = zeros[cellIndex] + 1
          console.log(zeros)
        }
        if (row !== 0 && cell !== 0) {
          matrix[rowIndex - zeros[cellIndex]][cellIndex] = matrix[rowIndex][cellIndex]
        }
        if (zeros[cellIndex] !== 0){
          matrix[rowIndex][cellIndex] = 0
        }
      })
    })
    matrix.reverse()
  }

  const sumDown = (matrix) => {
    matrix.reverse().forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        if (rowIndex !== 0) {
          if(matrix[rowIndex - 1][cellIndex] === matrix[rowIndex][cellIndex]) {
            matrix[rowIndex - 1][cellIndex] = matrix[rowIndex][cellIndex] + matrix[rowIndex-1][cellIndex]
            matrix[rowIndex][cellIndex] = 0
          }
        }
      })
    })
    matrix.reverse()
  }

  const addCell = (matrix) => {
    const  shuffle = [2, 2, 2, 2, 2, 2, 2, 2, 4, 4]
    const cellEmpty = [];
    const cellEmptyRow = [];
    matrix.forEach((row,rowIndex) => {
      row.forEach((cell,cellIndex) => {
        if (cell === 0){
          cellEmpty.push(cellIndex);
          cellEmptyRow.push(rowIndex);
        }
      })
    })
    const randomIndex = Math.floor(Math.random() * cellEmpty.length);
    matrix[cellEmptyRow[randomIndex]][cellEmpty[randomIndex]] = shuffle[Math.floor(Math.random()*shuffle.length)];
  }

  const [gameBoard, setGameBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
    ]);

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 37) {//37 left, 38 up, 39 right, 40 down
        moveLeft(gameBoard);
        sumLeft(gameBoard);
        moveLeft(gameBoard);
        addCell(gameBoard);
        setGameBoard([...gameBoard]);
      }

      if (event.which === 38) {
        moveUp(gameBoard);
        sumUp(gameBoard);
        moveUp(gameBoard);
        addCell(gameBoard)
        setGameBoard([...gameBoard]);
      }

      if (event.which === 39) {
        moveRight(gameBoard);
        sumRight(gameBoard);
        moveRight(gameBoard);
        addCell(gameBoard)
        setGameBoard([...gameBoard]);
      }

      if (event.which === 40) {
        moveDown(gameBoard);
        sumDown(gameBoard);
        moveDown(gameBoard);
        addCell(gameBoard)
        setGameBoard([...gameBoard]);
      }
    })
  },[] )

  return ( 
    <div className="board">
      {gameBoard.map((row,rowIndex) => 
          row.map((cell,cellIndex) => 
            <Element key={`${rowIndex}-${cellIndex}-${cell}`} a={cell} />
          )
        )
      }
    </div>
  );
};

export default App;