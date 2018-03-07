import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { identity } from 'index/constants'
import Button from 'components/Button'
import MenuList from 'components/MenuList'
import Header from 'containers/Header'
import PropTypes from 'prop-types'
import Wrapper from 'components/Wrapper'
import classes from './styles.scss'

class Process extends Component {

  render() {

    return [
      <Header key={1} changeOn={20}/>,
      <main key={2} className={classes.container}>
        <Helmet>
          <title>{"Processes | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Processes"}/>
        </Helmet>
        <div className={classes.header}>
          <h1>{"Our Process"}</h1>
          <p>{"Check opportunities with us!"}</p>
        </div>
        <Wrapper>
          <div className={classes.section}>
            <img src="/img/computer.svg"/>
            <h2>
              Stage
              <span>1</span>
            </h2>
            <h1>Service Specification</h1>
            <p>First stage is basically information exchange and discussion on your project needs. We would like to understand what specific services and engineers you are looking for, what kind of projects you are working on, and what kind of teams you are now currently working with. Follow up with lawyers’ and financiers’ consultation to approximately estimate the costs, we will have a mutual agreement on the final tasks.</p>
          </div>
          <div className={classes.section}>
            <img src="/img/offer.svg"/>
            <h2>
              Stage
              <span>2</span>
            </h2>
            <h1>Commercial Offer</h1>
            <p>After discussion and budget estimation, we will have an official agreement based on the expectation and descriptions you provided. And then let’s start finding you the right guy!</p>
          </div>
          <div className={classes.section}>
            <img src="/img/candidates.svg"/>
            <h2>
              Stage
              <span>3</span>
            </h2>
            <h1>Candidates Approach</h1>
            <p>Based on the internal database we created throughout the years, we are able to reach out to the right candidates equipped with the right skills you need. Our experienced tech-recruiters will find the strongest developers in a minimized time period through all our local channels and external databases.</p>
          </div>
          <div className={classes.section}>
            <img src="/img/screening.svg"/>
            <h2>
              Stage
              <span>4</span>
            </h2>
            <h1>Screening</h1>
            <p>In prescreening stage, the candidates will be interviewed by our tech-recruiting team. Our recruiters are specializing in IT field. Their experience and specialty will allow them to test whether the candidates are professionally well-rounded for your project and whether they are equipped with good team-working skills and English communication ability.</p>
          </div>
          <div className={classes.section}>
            <img src="/img/support.svg"/>
            <h2>
              Stage
              <span>5</span>
            </h2>
            <h1>Continuous Support</h1>
            <p>After approving our candidates, we will prepare the NDA. (Non-disclosure agreement). We provide engineers with all the hardware they need and a comfortable working environment. The tracking systems we designed will enable you to manage engineers working process. The engineers will be continuously supported by our book-keeping and law consultation services. You focus on your business development, and we cover the rest!</p>
          </div>
        </Wrapper>
        <div className={classes.footer}>
          <h1>Ready to talk?</h1>
          <p>Drop us a letter telling about yourself and let’s talk!</p>
          <Button href="mailto:info@sdsolutions.tech">info@sdsolutions.tech</Button>
        </div>
      </main>
    ]
  }
}

export default Process
