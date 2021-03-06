import React, { Component } from 'react'
import styles from './Mobile.module.css'

export default class Mobile extends Component {

  render() {
    const {mobImgSrc, mobH3, mobH2, mobH4}=this.props.mob;
    return (
    <section className={this.props.mob.mobIsReverse ? styles.row_reverse : styles.row}>
        <div className={styles.mobileimg}>
          <img src={require(`${mobImgSrc}`)} alt='mobile' />
        </div>
        <article className={styles.mobileinfo}>
          <h3>{mobH3}</h3>
          <h2>{mobH2}</h2>
          <h4>{mobH4}</h4>
        </article>
    </section>
    )
  }
}