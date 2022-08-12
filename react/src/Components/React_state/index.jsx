import React, { Component } from 'react'
// import Calendar from './Calendar'
import StopWatch from './StopWatch'

export default class React_state extends Component {
  render() {
    return (
      <>
        <StopWatch timeLimit={5}/>
        <StopWatch />
        {/* <Calendar /> */}
      </>
    )
  }
}

