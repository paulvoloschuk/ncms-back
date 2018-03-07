import React from 'react'
import classes from './styles.scss'
import { combineClasses as combine } from 'index/helpers'

function Flexbox (props) {
  let { reverse } = props
  return (
    <div className={combine(classes.container, reverse && classes.container__reverse)}>
      {props.children.map((child, index) => (
        <div key={index}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default Flexbox
