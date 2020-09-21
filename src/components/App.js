import React, { useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 


const App = () => {
  const [matrix, setMatrix] = useState([
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
    ]);

 

  const sum =(a,b) => {
    return a+b;
  };

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 38) {
        matrix[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)]=2
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