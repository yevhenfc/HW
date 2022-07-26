import React, { Component } from 'react'
import styles from './stopwatch.module.css';

export default class StopWatch extends Component {
constructor(props) {
  super(props)
  this.state = {
     timeLimit: this.timeLimit,
     time: 0
  }

  this.timerId = null;
}

getDbl = (number) => number.toString().length === 1 ? '0' + number: number;

start = () => !this.timerId ? setInterval(this.next, 1000) : null;

next = () => {if (this.props.timeLimit <= this.state.time) 
             {clearInterval(this.timerId); this.timerId = null} 
             else {this.setState({time: this.state.time + 1})}};

componentDidMount(){this.start()};

render() {
  const countUp = this.getDbl(this.state.time); 
  const countDown = this.getDbl(this.props.timeLimit - this.state.time);
  return (
      <div className={countDown === '00' ? `${styles.stopwatch_container} ${styles.endOfWatch}`: styles.stopwatch_container}>
        <h2>StopWatch</h2>
        <h4>00:00:{countUp}</h4>
        <h4>00:00:{countDown}</h4>
        <h3 className={countDown === '00' ? styles.show: styles.hide}>that's all folks!</h3>
      </div>
    )
  }
}

StopWatch.defaultProps = {
  timeLimit: 10,
}
