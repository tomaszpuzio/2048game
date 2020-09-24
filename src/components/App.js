import React, { useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 


const App = () => {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0],
    [2, 2, 0, 0],
    [0, 0, 0, 0],
    [2, 2, 0, 0]
    ]);

 

  const sum =(a,b) => {
    return a+b;
  };

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 38) {
        matrix.slice(0,3).forEach((row,rowIndex) =>
          row.forEach((cell,cellIndex) => {
            if (matrix[rowIndex][cellIndex] === matrix[rowIndex+1][cellIndex] || matrix[rowIndex][cellIndex] === 0) {
                matrix[rowIndex][cellIndex] = matrix[rowIndex][cellIndex]+matrix[rowIndex+1][cellIndex]
                matrix[rowIndex+1][cellIndex] = 0
            }
          })
        )

        // let x = Math.floor(Math.random() * 4)
        // let y = Math.floor(Math.random() * 4)
          
        // while (matrix[x][y] === 2) {
        //   x = Math.floor(Math.random() * 4)
        //   y = Math.floor(Math.random() * 4)
        // } 

        // matrix[x][y]=2
        setMatrix([...matrix])
      }
    })
  }, [])

  return ( 
    <div className="board">
      {matrix.map((row,rowIndex) => 
          row.map((cell,cellIndex) => 
            <Element key={`${rowIndex}-${cellIndex}-${cell}`} a={cell} />
          )
        )
      }
    </div>
  );
};

export default App;