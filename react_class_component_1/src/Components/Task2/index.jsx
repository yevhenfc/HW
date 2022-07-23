import React, { Component } from 'react';
import Counter from './Counter';
import styles from './Task2.module.css';

export default class Task2 extends Component {
  render() {
    return (
      <Counter value={1} step={1}/>
     )
  }
}
