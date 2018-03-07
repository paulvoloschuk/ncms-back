import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import classes from './styles.scss'

@connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    logOut: () => dispatch({
      type: 'user/LOGOUT'
    })
  })
)
class UserPanel extends Component {

  render() {
    let { user, logOut } = this.props
    return !user.rank
      ? null
      : (
      <div className={classes.container}>
        <Wrapper className={classes.wrapper}>
          <Link to="/">Mainpage</Link>
          <Link to="/admin">Dashboard</Link>
          <div className={classes.dropdown}>
            <span>{user.fullname}</span>
            <ul>
              <li>Ola, {user.fullname}!</li>
              <li><Link to="/profile">Profile</Link></li>
              <li><button className={classes.logout} onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default UserPanel
