import React from 'react';
//Components
import ControlContainer from '../control-container/control-container';
import TimeContainer from '../time-container/time-container';
import SessionContainer from '../session-container/session-container';
import TitleContainer from '../title-container/title-container';

import './pomodoro-clock.css';


class PomodoroClock extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        break: 5,
        session: 25,
        label: 'Session',
        minutes: 25,
        seconds: 0 + '0',
        timer: 0,
        running: false,
        paused: false
      }
      this.handleBreakInc = this.handleBreakInc.bind(this);
      this.handleBreakDec = this.handleBreakDec.bind(this);
      this.handleSessionInc = this.handleSessionInc.bind(this);
      this.handleSessionDec = this.handleSessionDec.bind(this);
      this.handleStart = this.handleStart.bind(this);
      this.handleReset = this.handleReset.bind(this);
    }
    handleBreakInc() {
      if(this.state.break < 60) {
        this.setState ({
          break: this.state.break += 1
        })
      }
    }
    handleBreakDec() {
      if(this.state.break > 1) {
        this.setState ({
          break: this.state.break -= 1
        })
      }
    }
    handleSessionInc() {
      if(this.state.session < 60) {
        this.setState ({
          session: this.state.session += 1,
          minutes: this.state.minutes += 1,
        })
      }
    }
    handleSessionDec() {
      if(this.state.session > 1) {
        this.setState ({
          session: this.state.session -= 1,
          minutes: this.state.minutes -= 1,
        })
      }
    }
    handleStart() {
      var session = this.state.minutes * 60;
      var breakTime = this.state.break * 60 + 1;
      var timer = session
      
        if (this.state.running === false) {
  
          this.intervalID = setInterval(() => {
          --timer
         
         var minutes = parseInt(timer / 60);
         var seconds = timer % 60;
            
         minutes = minutes < 10 ? '0' + minutes : minutes
         seconds = seconds < 10 ? '0' + seconds : seconds
      
        this.setState({
           minutes: minutes,
           seconds: seconds,
           running: true
         })
      
          if (timer <= 0 && this.state.label === 'Session') {
           timer = breakTime
           this.setState({
              label: 'Break'
           })
            document.getElementById('beep').play()
          } else if (timer <= 0 && this.state.label === 'Break') {
           timer = session + 1
           this.setState({
             label: 'Session'
           })
            document.getElementById('beep').play()
         }
       }, 1000)
     } else if (this.state.running === true ) {
        if (this.state.paused === false) {
        clearInterval(this.intervalID)
        this.setState({
          paused: true
        }) 
       } else if (this.state.paused === true) {
          var session = (this.state.minutes * 60) + this.state.seconds;
          var breakTime = (this.state.break * 60 + 1) + this.state.seconds;
          var timer = session
          
          this.intervalID = setInterval(() => {
          --timer
         
         var minutes = parseInt(timer / 60);
         var seconds = timer % 60;
         
         minutes = minutes < 10 ? '0' + minutes : minutes
         seconds = seconds < 10 ? '0' + seconds : seconds
      
        this.setState({
           minutes: minutes,
           seconds: seconds,
           running: true,
           paused: false
         })
      
          if (timer <= 0 && this.state.label === 'Session') {
           timer = breakTime
           this.setState({
              label: 'Break'
           })
            document.getElementById('beep').play()
          } else if (timer <= 0 && this.state.label === 'Break') {
           timer = session + 1
           this.setState({
             label: 'Session'
           })
            document.getElementById('beep').play()
         }
       }, 1000)
       }
     }
   }
    handleReset() {
      clearInterval(this.intervalID)
      this.setState({
        break: 5,
        session: 25,
        label: 'Session',
        minutes: 25,
        seconds: '0'+ 0,
        paused: false,
        running: false
      })
      document.getElementById('beep').pause();
      document.getElementById('beep').currentTime = 0;
    }
    render() {
      return (
        <div className='clock-parent'>
          <TitleContainer />
          <SessionContainer 
            break={this.state.break} 
            session={this.state.session} 
            handleBreakInc={this.handleBreakInc}
            handleBreakDec={this.handleBreakDec}
            handleSessionInc={this.handleSessionInc}
            handleSessionDec={this.handleSessionDec}
          />
          <TimeContainer 
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            label={this.state.label} 
          />
          <ControlContainer 
            handleStart={this.handleStart}
            handlePause={this.handlePause}
            handleReset={this.handleReset}  
          />
        </div>
      )
    }
  }

  export default PomodoroClock;