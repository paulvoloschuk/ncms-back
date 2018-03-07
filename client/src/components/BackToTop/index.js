import { combineClasses as combine } from 'index/helpers'
import React, { Component } from 'react'
import { scrollTop } from 'index/helpers'
import classes from './styles.scss'

class BackToTop extends Component {
  constructor() {
    super()
    this.state = {hidden: true}
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.hidden !== this.state.hidden
  }
  componentDidMount() {
    this.scrollContainer = document.querySelector('html')
    document.addEventListener('scroll', event => {
      let { availHeight } = window.screen
      this.setState({
        hidden: (this.scrollContainer.scrollTop < availHeight * 0.5)
      })
    })
  }
  render() {
    return <div className={combine(classes.button, this.state.hidden && classes.hidden)} onClick={scrollTop()}/>
  }
}

export default BackToTop
