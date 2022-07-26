import React, { Component } from 'react';
import React_class_component from './Components/React_class_component';
import React_state   from './Components/React_state';

export default class App extends Component {
render() {
    return (
      <>
        <React_class_component />
        <React_state />
      </>
     )
  }
}

