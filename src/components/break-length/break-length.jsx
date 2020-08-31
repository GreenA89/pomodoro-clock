import React from 'react';
import './break-length.css';

const BreakLength = (props) => {
    return (
      <div className='break-length'>
        <div>
          <p className='break-session' id='break-label'>Break Length</p>
        </div>
        <div className='button-container'>
          <button className='button' id='break-increment' onClick={() => props.handleBreakInc()}>+</button>
          <div id='break-length'>{props.break}</div>
          <button className='button'id='break-decrement' onClick={() => props.handleBreakDec()}>-</button>
        </div>
      </div>
    )
  }

  export default BreakLength;