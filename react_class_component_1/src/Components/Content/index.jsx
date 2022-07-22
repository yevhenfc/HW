import React, { Component } from 'react';
import styles from './Content.module.css';
import Head   from '../Head';
import Mobile from '../Mobile';

class mobClass{
  constructor(mobImgSrc, mobH3, mobH2, mobH4, mobIsReverse){
      this.mobImgSrc  = mobImgSrc;
      this.mobH3 = mobH3;
      this.mobH2 = mobH2;
      this.mobH4 = mobH4;
      this.mobIsReverse = mobIsReverse
  }
};

let mob1 = new mobClass('./mobi1.png'
                       ,'Create an account'
                       ,'Create/login to an existing account to get started'
                       ,'An account is created with your email and a desired password'
                       , false);
let mob2 = new mobClass('./mobi2.png'
                       ,'Explore varieties'
                       ,'Shop for your favorites meal as e dey hot.'
                       ,'Shop for your favorite meals or drinks and enjoy while doing it.'
                       , true);

export default class Content extends Component {
  render() {
    return (
      <div className={styles.content}> 
        <Head />
        <Mobile mob={mob1}/>
        <Mobile mob={mob2}/>
      </div>
    )
  }
}
