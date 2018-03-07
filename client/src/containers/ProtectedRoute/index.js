import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

@connect(
  state => ({
    rank: state.user.rank
  })
)
class ProtectedRoute extends Component {
  render() {
    let {minRank: min, maxRank: max, redirectUrl: url, rank, ...rest} = this.props
    return (min && rank >= min || max && rank < max)
      ? <Route {...rest} />
      : <Redirect to={url} />
  }
}

export default ProtectedRoute
