import React from 'react';
import './session-length.css';

const SessionLength = (props) => {
    return (
      <div className='session-length'>
        <div>
          <p className='break-session session' id='session-label'>Session Length</p>
        </div>
        <div className='button-container'>
          <button className='button' id='session-increment' onClick={() => props.handleSessionInc()}>+</button>
          <div id='session-length'>{props.session}</div>
          <button className='button' id='session-decrement' onClick={() => props.handleSessionDec()}>-</button>
        </div>
      </div>
    )
}

export default SessionLength; 
  