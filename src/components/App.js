import React, { useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 


const App = () => {

  const rowsToColumns = (matrix) => {
    matrix.forEach((row,rowIndex) =>
      row.forEach((cell,cellIndex) => {
        matrix[rowIndex][cellIndex] = matrix[cellIndex][rowIndex];
      })
    )
  }

  const sumCells = (matrix) => {
    matrix.forEach((row,rowIndex) => {
      for (var cellIndex = 0; cellIndex < row.length-1 ; cellIndex++) {
        if (matrix[rowIndex][cellIndex] === matrix[rowIndex][cellIndex+1]) {
          matrix[rowIndex][cellIndex] = matrix[rowIndex][cellIndex]+matrix[rowIndex][cellIndex+1];
          matrix[rowIndex][cellIndex+1] = 0;
        }
      }
    })
  }

  const moveCells = (matrix) => {
    var count = 0;
    matrix.forEach((row,rowIndex) => {
      row.forEach((cell,cellIndex) => {
        if (matrix[rowIndex].indexOf(0) !== -1) {
          matrix[rowIndex].splice(matrix[rowIndex].indexOf(0),1);
          matrix[rowIndex].push(0);
        }
      })
    })
  }

  const addCell = (matrix) => {
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
    matrix[cellEmptyRow[randomIndex]][cellEmpty[randomIndex]] = 2;
  }

  const [gameBoard, setGameBoard] = useState([
    [0, 0, 4, 2],
    [2, 2, 0, 12],
    [2, 2, 4, 2],
    [2, 0, 2, 0]
    ]);

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 37) {
        moveCells(gameBoard);
        sumCells(gameBoard);
        moveCells(gameBoard);
        addCell(gameBoard);
        setGameBoard([...gameBoard])
      }
    })
  }, [])

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