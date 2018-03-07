import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { identity } from 'index/constants'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import Wrapper from 'components/Wrapper'
import Header from 'containers/Header'
import Positions from 'containers/Positions'

import classes from './styles.scss'

class Careers extends Component {
  render() {
    return [
      <Header key={1}/>,
      <main className={classes.container} key={2}>
        <Helmet>
          <title>{"Careers | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Careers"}/>
        </Helmet>
        <div className={classes.header}>
          <h1>Join Our Team</h1>
          <p>Check opportunities with us!</p>
        </div>
        <Wrapper>
          <Positions/>
        </Wrapper>
        <div className={classes.slider}>
          <Wrapper>
            <h1>Our Life</h1>
            <p>At SD Solutions, you can really define how company will grow in the future and influence key decisions. We hear everyone and each opinion is considered. We trust you, thus our relationship is built on freedom and responsibility!</p>
          </Wrapper>
        </div>
        <div className={classes.benefits}>
        <Wrapper>
          <h1>Perks & Benefits</h1>
          <p>We take care of our employees with our competitive benefits packages.<br/> We aim to have a long-term employment relationship with you!</p>
          <div className={classes.benefits__list}>
            <figure>
              <img src="/img/plant.svg"/>
              <h2>Convenient office location</h2>
              <p>Our office located in city center of Kyiv where it is easy to access to all public transportations. Surrounded by variety of restaurants and cafés. You will have no difficulties finding a lunch spot.</p>
            </figure>
            <figure>
              <img src="/img/laptop.svg"/>
              <h2>Computer hardware</h2>
              <p>We provide professional hardware equipment on your request, in order to support your growth and working efficiency in our company. A handy tool makes a handy man!</p>
            </figure>
            <figure>
              <img src="/img/home.svg"/>
              <h2>Work-life balance</h2>
              <p>We believed that flexible working practices had a positive impact on staff engagement and that is the reason why we insisted on our employees having their own flexible working schedule. You are also allowed to work at home once a week.</p>
            </figure>
            <figure>
              <img src="/img/pool.svg"/>
              <h2>Team events</h2>
              <p>A comfortable team-working environment is built on a strong foundation of team bonding. We have series of team events including casual meet-ups and two annual parties. We know how to work and have fun!</p>
            </figure>
            <figure>
              <img src="/img/bookkeeper.svg"/>
              <h2>We got you covered</h2>
              <p>In addition to our hardware support. We offer accountant, lawyer services and insurances for our staffs. You will have no worries and distraction while working with us.</p>
            </figure>
            <figure>
              <img src="/img/career.svg"/>
              <h2>Career development</h2>
              <p>Our team members are all came from diverse backgrounds, we bring different talents and ideas together. In addition, we also hold elective workshops and career lectures for your personal and professional development. Work and learn with us!</p>
            </figure>
          </div>
        </Wrapper>
        </div>
        <div className={classes.join}>
          <Wrapper>
            <h1>Ready to join?</h1>
            <p>Drop us a letter telling about yourself and let’s talk!</p>
            <Button href="mailto:info@sdsolutions.tech" className={classes.startLink}>info@sdsolutions.tech</Button>
          </Wrapper>
        </div>
      </main>
    ]
  }
}

export default Careers
