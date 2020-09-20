import React, { useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 


const App = () => {
  const [status, setStatus] = useState(true);
  const [aRow, setARow] = useState([1,2,3,4]);
  const [bRow, setBRow] = useState([1,2,3,4]);
  const [cRow, setCRow] = useState([1,2,3,4]);
  const [dRow, setDRow] = useState([1,2,3,4]);

  const array = [
    aRow,
    bRow,
    cRow,
    dRow
  ];

  const onKeyUp= () => {
    setStatus(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 38) {
        //onKeyUp()
        setARow([bRow[0]+cRow[0]+dRow[0], bRow[1]+cRow[1]+dRow[1], bRow[2]+cRow[2]+dRow[2], bRow[3]+cRow[3]+dRow[3]])
      }
    })
  }, [status])

  return ( 
    <div className="board">
      <div className="board-element"> 
        { status ? <Element a={array[0][0]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[0][1]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[0][2]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[0][3]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[1][0]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[1][1]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[1][2]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[1][3]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[2][0]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[2][1]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[2][2]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[2][3]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[3][0]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[3][1]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[3][2]} /> : null }
      </div>
      <div className="board-element"> 
        { status ? <Element a={array[3][3]} /> : null }
      </div>
    </div>
  );
};

export default App;