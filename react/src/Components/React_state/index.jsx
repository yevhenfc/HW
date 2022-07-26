import React, { Component } from 'react'
import StopWatch from './StopWatch'

export default class React_state extends Component {
  render() {
    return (
      <>
        <StopWatch timeLimit={5}/>
      </>
    )
  }
}

