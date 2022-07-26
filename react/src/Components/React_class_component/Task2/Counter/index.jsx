import React, { Component } from 'react';
import styles from './Counter.module.css';

export default class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        value: this.props.value,
        step: this.props.step
    }
  }

  valueAdd = () => {this.setState((state) => ({value: this.state.value + this.state.step}))}
  valueSub = () => {this.setState((state) => ({value: this.state.value - this.state.step}))}
  stepAdd  = () => {this.setState((state) => ({step: this.state.step  + 1}))  }
  stepSub  = () => {this.setState((state) => ({step: this.state.step  - 1}))  }

  render() {
    return (
      <div className={styles.counter_container}>
        <h1>Counter</h1>
        <div className={styles.btn_counter_container}>
          <p>Value = {this.state.value}</p>
          <button onClick={this.valueAdd} className='btn btnAdd'>Add {this.state.step}</button>
          <button onClick={this.valueSub} className='btn btnSub'>Sub {this.state.step}</button>
        </div>
          
        <div className={styles.btn_step_container}>
          <p>Step  = {this.state.step}</p>
          <button onClick={this.stepAdd} className='btn btnAdd'>Add 1</button>
          <button onClick={this.stepSub} className='btn btnSub'>Sub 1</button>          
        </div>
        
      </div>
    )
  }
}
