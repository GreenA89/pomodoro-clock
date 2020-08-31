import React from 'react';
import './control-container.css';

const ControlContainer = (props) => {
    return (
      <div className='control-container'>
        <button 
          className='button2 button3' 
          id='start_stop' 
          onClick={props.handleStart}
          >Start / Stop
        </button>
        <button className='button2' id='reset' onClick={props.handleReset}>Reset</button>
      </div>
    )
  }

  export default ControlContainer;