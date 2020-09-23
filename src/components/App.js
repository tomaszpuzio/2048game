import React, { useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 


const App = () => {
  const [matrix, setMatrix] = useState([
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null],
    [null,null,null,null]
    ]);

 

  const sum =(a,b) => {
    return a+b;
  };

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 38) {
        matrix[0] = matrix[0].map((cell,cellIndex) => {
          return cell + matrix[1][cellIndex]+ matrix[2][cellIndex] + + matrix[3][cellIndex]
        });

        let x = Math.floor(Math.random() * 4)
        let y = Math.floor(Math.random() * 4)
          
        while (matrix[x][y] === 2) {
          x = Math.floor(Math.random() * 4)
          y = Math.floor(Math.random() * 4)
        } 

        matrix[x][y]=2
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