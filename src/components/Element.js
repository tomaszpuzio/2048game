import React, { useState, useEffect} from 'react';

const Element = ({a}) => {
  return (
    <div className="board-element"> 
      <div className="element"> {a ? a : ''} </div>
    </div>
    );
};

export default Element;