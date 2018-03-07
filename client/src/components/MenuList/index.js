import React, { Component } from 'react'
import {Link} from 'components/Link'
import PropTypes from 'prop-types'
import {navigationItems} from 'index/constants'

const items = {
  Home: '/',
  ...navigationItems
}

class MenuList extends Component {
  render() {
    return (
      <ul {...this.props}>
        {Object.keys(items).map((name, index) =>
          <li key={index}>
            <Link to={items[name]}>{name}</Link>
          </li>)}
      </ul>
    )
  }
}
export default MenuList
