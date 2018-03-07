import React from 'react'

import classes from './styles.scss'


function Wrapper (props) {
 return (
   <div className={classes.container + ' ' + props.className}>
    {props.children}
   </div>
 )
}

export default Wrapper


Wrapper.defaultProps = {
  className: ''
}
