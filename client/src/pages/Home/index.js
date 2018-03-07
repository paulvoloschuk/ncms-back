import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { identity } from 'index/constants'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import ContactForm from 'containers/ContactForm'
import Header from 'containers/Header'

import Wrapper from 'components/Wrapper'
import Flexbox from 'components/Flexbox'
import Button from 'components/Button'

import { TweenLite } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Power2 } from 'gsap/src/uncompressed/easing/EasePack'

import {combineClasses as compose} from 'index/helpers'
import classes from './styles.scss'

@connect(
  state => ({
    router: state.router
  })
)
class Home extends Component {
  render() {
    let { hash } = this.props.router.location
    setTimeout(() => {
      if (hash && document.querySelector(hash))
        TweenLite.to(document.querySelector('html'), 2, {scrollTo: document.querySelector(hash).offsetTop, ease: Power2.easeOut})
    },100)
    return [
      <Header key={1}/>,
      <main key={2} className={classes.container}>
        <Helmet>
          <title>{"Homepage | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Homepage"}/>
          <meta name="format-detection" content="telephone=no"/>
          <meta http-equiv="x-rim-auto-match" content="none"/>
        </Helmet>
        <div className={classes.header}>
          <h1>Looking for IT Engineers?</h1>
          <p>
            Extend your team with our professional IT developers<br/><br/>
            <Button to="#about" className={classes.startLink}>Start now</Button>
          </p>
        </div>
        <div id="about" className={compose(classes.section, classes.turnkey)}>
          <Wrapper>
            <img className={classes.turnkey__img} src="/img/invalid-name.svg"/>
            <h1>A Turnkey Staffing Solution</h1>
            <p>We are full-service employment agency in IT industry. We recruit, screen, and process developers based on your job description. Developers will be working remotely for you in our Kyiv office with the hardware we support. Our turnkey staffing services include providing professional developers, development teams, and research & development centers.</p>
            <p>Founded in 2014 in Kyiv, SD Solutions today have many long-term clients and partners in Israel, and other multinational enterprises. We actively contact and visit our clients oversea for business meeting. Ensuring we deliver a satisfying services in all process. We are looing forward to have a long-term partnership with you!</p>
            <p className={classes.startLink__container}>
              <Button to="#contacts" className={classes.startLink}>Start your team today</Button>
            </p>
          </Wrapper>
        </div>
        <div id="services" className={compose(classes.section, classes.services)}>
          <Wrapper>
            <h1>Our Services</h1>
            <h3>You focus on the development. We will take care of the rest</h3>
            <Flexbox>
              <div className={classes.services__item}>
                <img src="/img/developer-1.svg"/>
                <h2>Skilled Developers</h2>
                <p>Get access to tech talents that will match your needs.</p>
              </div>
              <div className={classes.services__item}>
                <img src="/img/developer-3.svg"/>
                <h2>Development Teams</h2>
                <p>Your own custom-recruited software developers within our offices in Ukraine.</p>
              </div>
              <div className={classes.services__item}>
                <img src="/img/centre.svg"/>
                <h2>R&D Centers</h2>
                <p>Extend your product to foreign markets by building your own R&D Center.</p>
              </div>
            </Flexbox>
          </Wrapper>
        </div>
        <div id="hiring" className={compose(classes.section, classes.hiring)}>
          <Wrapper>
            <Flexbox reverse>
              <div>
                <h1>We Are Hiring</h1>
                <p>Interested in joining us, but not sure where to start? We are glad to offer you employment opportunities of any type!</p>
                <p>Our own team model would be the right choice if you are interested in long-term opportunities with the industry’s best players worldwide.</p>
                <p className={classes.startLink__container}>
                  <Button to="#contacts" className={classes.joinLink}>Join us now</Button>
                </p>
              </div>
              <div>
                <img className={classes.hiring__img} src="/img/bitmap.png" srcSet="/img/bitmap@2x.png 2x, /img/bitmap@3x.png 3x"/>
              </div>
            </Flexbox>
          </Wrapper>
        </div>
        <div id="employment" className={compose(classes.section, classes.employment)}>
          <Wrapper>
            <img className={classes.employment__img} src="/img/employee.svg"/>
            <h1>Highly Qualified Employees</h1>
            <p>We handle all of the work associated with finding and screening candidates for current openings. As a result, our clients receive CVs of the candidates that passed our prescreening and have proven experience in relevant IT fields.</p>
            <ul>
              <li>Choose the best candidates that meet all your requirements</li>
              <li>Full-time developers work in our offices directly on your project</li>
              <li>All employees are provided with working space and all necessary facilities</li>
            </ul>
            <p className={classes.startLink__container}>
              <Button to="#" className={classes.joinLink}>Start your team today</Button>
            </p>
          </Wrapper>
        </div>
        <div id="clients" className={compose(classes.section, classes.clients)}>
          <Wrapper>
            <h1>Our Clients</h1>
            <p>We successfully work with companies from all over the world</p>


          </Wrapper>
        </div>
        <div id="contacts" className={compose(classes.section, classes.contacts)}>
          <Wrapper>
            <h1>Get in Touch</h1>
            <p>Let’s talk business</p>
              <div className={classes.formGrid}>
              <ContactForm/>
              <p>or</p>
              <ul className={classes.contacts__list}>
                <li className={compose(classes.contacts__item, classes.contacts__item_mail)}>
                  <a href="mailto:info@sdsolutions.tech">info@sdsolutions.tech</a>
                </li>
                <li className={compose(classes.contacts__item, classes.contacts__item_location)}>
                  <span>Kyrylivska St, 15/1<br/> Kiev, floor 5</span>
                </li>
                <li className={compose(classes.contacts__item, classes.contacts__item_phone)}>
                  Ukr: <a href="tel:+380635948661">+38 (063) 594 86 61</a><br/>
                  Isr: <a href="tel:+972543281151">+97 (254) 328 11 51</a>
                </li>
              </ul>
            </div>
          </Wrapper>
        </div>
      </main>
    ]
  }
}

export default Home
