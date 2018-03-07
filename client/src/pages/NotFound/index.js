import React, { Component } from 'react'
import MenuList from 'components/MenuList'
import { Helmet } from 'react-helmet'
import { identity } from 'index/constants'
import PropTypes from 'prop-types'
import classes from './styles.scss'

class NotFound extends Component {

  render() {

    return (
      <main className={classes.container}>
        <Helmet>
          <title>{"Page not found | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Page not found"}/>
        </Helmet>
        <h1 className={classes.caption}>Oops. It seems like we have broke something</h1>
        <p className={classes.question}>Maybe you will find it below</p>
        <MenuList className={classes.navigation} />
      </main>
    )
  }
}

export default NotFound
