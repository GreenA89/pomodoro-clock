import React from 'react';
import './time-container.css';

const TimeContainer = (props) => {
    return (
      <div className='time-container'>
        <div className='time-left'>
          <h2 className='label' id='timer-label'>{props.label}</h2>
          <div className='clock' id='time-left'>{props.minutes + ':' + props.seconds}</div>
          <audio 
            id='beep'
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            >
          </audio>
        </div>
      </div>
    )
  }

  export default TimeContainer;