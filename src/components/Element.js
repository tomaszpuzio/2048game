import React, { useState, useEffect} from 'react';

const Element = ({a}) => {
  const [status, setStatus] = useState(false);
  
  const onClick = () => {
    setStatus(true);
  };

  return (
  <div className="board-element"> 
    <div className="element"> {a} </div>
  </div>
  );
};

export default Element;