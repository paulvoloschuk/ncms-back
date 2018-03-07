import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import UserPanel from 'containers/UserPanel'
import Wrapper from 'components/Wrapper'
import Dashboard from 'pages/Dashboard'
import Careers from 'pages/EditCareers'

import { Icon } from 'semantic-ui-react'

import classes from './styles.scss'

@connect(
  state => ({
    path: state.router.location.pathname
  })
)
class AdminPanel extends Component {
  renderMenu() {
    const items = {
            d: '/admin',
            c: '/admin/careers'
          },
          icons = {
            d: 'home',
            c: 'binoculars'
          }

    let { path } = this.props
    return Object.keys(items).map((name, index) =>
      <li key={index}>
        <Link
          className={(path == items[name]) ? classes.active : null}
          to={items[name]}
        >
          <Icon name={icons[name]} size="large"/>
        </Link>
      </li>
    )
  }

  render () {

    return [
      <UserPanel key={1}/>,
      <Wrapper className={classes.container} key={2}>
        <ul className={classes.menu}>
          {this.renderMenu()}
        </ul>
        <Switch>
          <Route exact path='/admin' component={Dashboard}/>
          <Route exact path='/admin/careers' component={Careers}/>
        </Switch>
      </Wrapper>
    ]
  }
}

export default AdminPanel
