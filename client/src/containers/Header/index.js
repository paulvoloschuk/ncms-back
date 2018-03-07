import React, {Component} from 'react'
import PropTypes from 'prop-types'
import UserPanel from 'containers/UserPanel'
import {Link} from 'components/Link'
import Wrapper from 'components/Wrapper'
import Logo from 'components/Logo'
import Navigation from 'components/Navigation'
import {combineClasses as compose} from 'index/helpers'
import classes from './styles.scss'
import {navigationItems} from 'index/constants'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
      open: false
    }
    this.scrollContainer = document.querySelector('html')
    this.scrollHandler = this.scrollHandler.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.scroll !== this.state.scroll
        || nextState.open !== this.state.open
  }
  componentDidMount() {
    document.addEventListener('scroll', this.scrollHandler)
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler)
  }
  scrollHandler(event) {
    let { availHeight } = window.screen
    this.setState({
      ...this.state,
      scroll: (this.scrollContainer.scrollTop > availHeight / (this.props.changeOn || 10))
    })
  }
  toggleNavigation() {
    this.setState({
      ...this.state,
      open: !this.state.open
    })
  }
  render() {
    let { scroll, open } = this.state
    return (
      <header className={compose(classes.container, scroll && classes.container__scrollOut)}>
        <UserPanel/>
        <Wrapper className={classes.wrapper}>
          <Link to="/">
            <Logo substate={scroll}/>
          </Link>
          <Navigation open={open}>
            {Object.keys(navigationItems).map((key, index) =>
              <Link
                key={index}
                to={navigationItems[key]}
                onMouseUp={this.toggleNavigation.bind(this)}
              >
                {key}
              </Link>
             )}
          </Navigation>
          <button className={classes.hamburger__viewport} onClick={this.toggleNavigation.bind(this)}>
            <span className={compose(classes.hamburger, scroll && !open && classes.hamburger__scrollOut, open && classes.hamburger__open)}/>
          </button>
        </Wrapper>
      </header>
    )
  }
}

export default Header
