import React from 'react';
// Components
import BreakLength from '../break-length/break-length';
import SessionLength from '../session-length/session-length';

import './session-container.css';

const SessionContainer = (props) => {
    return (
      <div className='session-container'>
        <BreakLength break={props.break} handleBreakInc={props.handleBreakInc} handleBreakDec={props.handleBreakDec} />
        <SessionLength session={props.session} handleSessionInc={props.handleSessionInc} handleSessionDec={props.handleSessionDec} />
      </div>
    )
  }

  export default SessionContainer;