import React, { Component } from 'react'
import {history} from 'index/middleware'
import { TweenLite } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Power2 } from 'gsap/src/uncompressed/easing/EasePack'

export class Link extends Component {
  render() {
    let props = {
      ...this.props,
      href: this.props.to
    }
    return (<a onClick={this.clickHandler.bind(this)} {...props}>{props.children}</a>)
  }
  clickHandler(event) {
    let {to} = this.props
    event.preventDefault()
    if(history.location.pathname !== to.slice(0, to.indexOf('#')))
      TweenLite
        .to(document.querySelector('html'), 1, {scrollTo: 0, ease: Power2.easeOut})
        .eventCallback('onComplete', () => history.push(to))
    else history.push(to)
    return false
  }
}
