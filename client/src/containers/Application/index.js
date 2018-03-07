import { withRouter } from 'react-router'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import ProtectedRoute from 'containers/ProtectedRoute'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import Wrapper from 'components/Wrapper'
import BackToTop from 'components/BackToTop'
import NotFoundPage from 'pages/NotFound'
import CareersPage from 'pages/Careers'
import AdminPanel from 'pages/AdminPanel'
import ProcessPage from 'pages/Process'
import PositionPage from 'pages/Position'
import LoginPage from 'pages/Login'
import HomePage from 'pages/Home'

import classes from './styles.scss'


class App extends Component {
  render() {
    let { href: currentURL } = window.location
    return (
      <div className={classes.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentURL} />

          <meta name="description" content="" />
          <meta name="current-locale" content="en"/>
          <meta name="current-currency" content="$"/>
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/careers" component={CareersPage}/>
          <Route exact path="/process" component={ProcessPage}/>
          <Route exact path="/position/:id" component={PositionPage}/>

          <ProtectedRoute exact path="/login" component={LoginPage} maxRank={1} redirectUrl="/admin" />
          <ProtectedRoute path="/admin" component={AdminPanel} minRank={1} redirectUrl="/login" />

          <Route component={NotFoundPage}/>
        </Switch>
        <BackToTop/>
        <Footer />
      </div>
    );
  }
}

export default App;
