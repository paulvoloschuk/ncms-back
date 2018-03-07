import React, { Component } from 'react'
import Header from 'containers/Header'
import Wrapper from 'components/Wrapper'
import Button from 'components/Button'
import HotOpenings from 'containers/HotOpenings'
import { Helmet } from 'react-helmet'
import { identity } from 'index/constants'
import { connect } from 'react-redux'
import { combineClasses as combine } from 'index/helpers'
import { Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ShareButton from 'components/ShareButton'

import classes from './styles.scss'

let init = false

@connect(
  state => ({
    positions: state.positions
  }),
  dispatch => ({
    fetchPositions: () => dispatch({type: 'positions/FETCH_START'})
  })
)
class Position extends Component {
  componentDidMount() {
    if(!init && !this.props.positions) {
      this.props.fetchPositions()
      init = false
    }
  }
  renderList(string) {
    let list = string.split('\n')

    return (
      <ul>
        {list.map((item, index) => {
          if (index == list.length - 1 && item[item.length - 1] !== '.')
            item = item + '.'
          else if (item[item.length - 1] !== ';')
            item = item + ';'
          return <li key={index}>{item}</li>
        })}
      </ul>
    )
  }
  render () {
    let { renderList } = this,
        { positions, match } = this.props,
        data = Array.from(positions).filter(({id}) => id == match.params.id)[0],
        title = data && data.name  || 'Loading position...',
        responsibilities = data && data.responsibilities ? <div><h1>Responsibilities </h1>{renderList(data.responsibilities)}</div> : null,
        requirements = data && data.requirements ? <div><h1>Requirements</h1>{renderList(data.requirements)}</div> : null,
        projectDescription = data && data.projectDescription ? <div><h1>About project </h1>{data.projectDescription}</div> : null,
        offerings = data && data.offerings ? <div><h1>What we offer</h1>{renderList(data.offerings)}</div> : null,
        shareData = {
          title: identity.companyName + " | " + title,
          description: data && data.projectDescription || ''
        },
        header = data
          ? <Wrapper>
              <h1>{data.name}</h1>
              <p>Check opportunities with us!</p>
            </Wrapper>
          : <Loader inverted active inline="centered" size="large">Loading</Loader>,
        content = data
          ? <Wrapper className={classes.flexContainer}>
              <article>
                {requirements}
                {offerings}
                {responsibilities}
                {projectDescription}
                <div className={classes.applyBox}>
                  <p>We are waiting for you!</p>
                  <Button statical >Apply for this job</Button>
                </div>
              </article>
              <aside>
                <p>
                  <ShareButton.Facebook {...shareData} />
                  <ShareButton.Linkedin {...shareData} />
                </p>
                <h2>Hot Openings</h2>
                <HotOpenings currentId={match.params.id}/>
                <Link to="/careers" className={classes.backLink}>Back to Job List</Link>
              </aside>
            </Wrapper>
          : null
    return (
      <div className={classes.container}>
        <Header/>
        <Helmet>
          <title>{identity.companyName + " | " + title}</title>
          <meta property="og:title" content={title + " - " + identity.companyName}/>
        </Helmet>
        <div className={classes.content}>
          {content}
          <div className={classes.extraJob}>
            <h1>Didn’t find suitable vacancy?</h1>
            <p>Drop us a letter telling about yourself and let’s talk!</p>
            <Button href="mailto:jobs@sdsolutions.tech">jobs@sdsolutions.tech</Button>
          </div>
        </div>
        <div className={combine(classes.header, !data && classes.header__loading)}>
          {header}
        </div>
      </div>
    )
  }
}

export default Position
