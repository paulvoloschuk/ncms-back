import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from 'components/Wrapper'
import SocialButtons from 'components/SocialButtons'
import classes from './styles.scss'

class Footer extends Component {
  render() {
    let year = new Date().getFullYear()
    return (
      <footer className={classes.container}>
        <Wrapper className={classes.wrapper}>
          <p>{"© SD Solutions, " + year}</p>
          <SocialButtons/>
        </Wrapper>
      </footer>
    )
  }
}

export default Footer
