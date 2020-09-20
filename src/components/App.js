import React, { useState, useEffect} from 'react';
import './style.css'
import Element from './Element' 


const App = () => {
  const array = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ];

  const [status, setStatus] = useState(true);
  
  const onKeyUp= () => {
    setStatus(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', function(event) {
      if (event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40) {
        onKeyUp()
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