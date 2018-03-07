import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {combineClasses as compose} from 'index/helpers'
import {Link} from 'components/Link'
import classes from './styles.scss'

const elements = [
    <a/>,
    <Link/>
  ]

class Button extends Component {
  render() {
    let props = {...this.props},
        isNativeLink = !props.to
    props.className = compose(
      classes.box,
      props.className,
      props.statical && classes.box__statical
    )

    return isNativeLink
      ? <a {...props}/>
      : <Link {...props}/>
  }
}

Button.propTypes = {
  statical: PropTypes.bool,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default Button
