import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './styles.scss'
import {combineClasses as combine} from 'index/helpers'

@connect (
  state => state.router.location,
  null
)
class Navigation extends Component {
  render() {
    return (
      <ul className={combine(classes.container, this.props.open && classes.container__open)}>
        {this.props.children.map((item, index) => {
          let activeModifier = (item.props.to === this.props.pathname) ? classes.item__active : '';
          return (
            <li key={index} className={classes.item + ' ' + activeModifier}>
              {item}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Navigation
