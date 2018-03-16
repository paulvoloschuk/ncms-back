import React, {Component} from 'react'
import classes from './styles.scss'

const INTERVAL = 3000

const DATA = [
  {
    id: 0,
    name: 'Alon Gamzu',
    role: 'CEO',
    company: {
      name: 'Roundforest',
      url: 'http://roundforest.com',
      logo: 'alon.jpg'
    },
    text: 'SD Solutions is a great partner for our Ukraine R&D center. With high proficiency and dedicated attention and service, they manage to connect us with the best developers to match our specific needs and support our ongoing operations there.'
  },
  {
    id: 1,
    name: 'Lior Romanowsky',
    role: 'CEO',
    company: {
      name: 'Spartans AI LTD',
      url: 'https://www.spartans.tech/',
      logo: 'lior.jpg'
    },
    text: 'Working with SD Solution is a pleasure. Top notch development talent, trustworthy and easy to interact with. It was very important for me to find a hiring partner that will have the same values as we do at Spartans. Found exactly that in SD Solutions. A pleasure to work with you guys.'
  },
  {
    id: 2,
    name: 'Deddy Lavid',
    role: 'CTO',
    company: {
      name: 'Presento',
      url: 'http://www.presenso.com/',
      logo: 'dessy.jpg'
    },
    text: 'SD Solutions is the most responsive team I ever met! They reply all of my email within 30 minutes. Always polite and friendly. Another thing is that they fly to visit their clients in Israel every month. They have constant face to face discussion with their partners just to make sure the service they provided in all stages is satisfied by their clients. This is how SD Solution, our long-term partner, take their continuous services seriously. I definitely will refer their services to all of whom have the same needs. These people are truly professionals and well-experienced.'
  },
  {
    id: 3,
    name: 'Boaz Inbal',
    role: 'General Manager, Dev. Centers Europe',
    company: {
      name: 'WIX',
      url: 'https://ru.wix.com/',
      logo: 'boaz.jpg'
    },
    text: 'We greatly appreciate the experience we have with SD Solutions, as they help us to find truly talented people. We have matching views on which people will succeed, that is why I can highly recommend this company.'
  },
  {
    id: 4,
    name: 'Pavel Soifer',
    role: 'CEO',
    company: {
      name: 'Hedgewiz',
      url: 'https://www.hedgewiz.co.uk/',
      logo: 'pavel.jpg'
    },
    text: 'SD Solutions are very helpful and responsive. The approach of management team has personal touch, that in my view is very important. Engineers are responsible and work perfectly with our own team. Great English and team working spirit. It is really a good experience working with SD Solutions.'
  }
]

class ClientSlider extends Component {
  constructor (props) {
    super (props)
    this.state = {index: 0}
  }

  componentDidMount = () => {
    this.interval = setInterval(this.nextSection, INTERVAL)
  }
  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  fitHeight = () => {
    let { textWrapper } = this.refs
    if (textWrapper)
      textWrapper.style.height = textWrapper.children[this.state.index].offsetHeight + 'px'
  }

  changeIndex = index => () => this.setState({
    ...this.state,
    index
  })

  nextSection = () => this.setState({
    ...this.state,
    index: ++this.state.index == DATA.length ? 0 : this.state.index
  })

  render () {
    setTimeout(this.fitHeight, 10)

    return (
      <div className={classes.clientSlider} ref="container">
        <div className={classes.clients}>
          <div className={classes.avatars}>
            {DATA.map(({id, company: {logo}}, arrayIndex) => {
              let index = (arrayIndex + DATA.length - this.state.index) % DATA.length
              return (
                <div key={logo} className={classes.face} style={{
                  backgroundImage:`url(/img/slider/${logo})`,
                  transform:`translateX(${index * 40}%) scale(${1 - index / 10})`,
                  zIndex: 1000 - index,
                  // opacity: 1 - index / 5
                }} onClick={this.changeIndex(arrayIndex)}/>
              )
            })}
          </div>
          <div className={classes.wrapper}>
            {DATA.map((item, index) =>
              <p className={this.state.index === index ? classes.active : null} key={index}>
                <a className={classes.name} href={item.company.url}>{item.name}</a>
                {item.role} of
                <a rel="nofollow" href={item.company.url}>{item.company.name}</a>
              </p>
            )}
          </div>
        </div>
        <div className={classes.feedback}>
          <div className={classes.wrapper} ref="textWrapper">
            {DATA.map(({text}, index) =>
              <p className={this.state.index === index ? classes.active : null} key={index}>{text}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ClientSlider
