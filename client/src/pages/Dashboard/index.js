import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { identity } from 'index/constants'

class Dashboard extends Component {

  render() {

    return (
      <div>
        <Helmet>
          <title>{"Dashboard | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Dashboard"}/>
        </Helmet>
        <br/>
          Dashboard
      </div>
    )
  }
}

export default Dashboard
