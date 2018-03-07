import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './styles.scss'
import { scrollTop } from 'index/helpers'

const typeLink = {
  'Development': 'dev',
  'Customer Service': 'service',
  'Quality Assurance': 'qa',
}

@connect(
  state => ({
    data: state.positions
  })
)
class HotOpenings extends Component {
  render() {
    let { data, currentId } = this.props,
        content = data
          ? data
              .filter(({id, hot}) => hot && id != currentId)
              .sort(({hot: a}, {hot: b}) => a - b)
              .map(this.renderItem)
          : null

    return (
      <div className={classes.container}>
        {content}
      </div>
    );
  }

  renderItem({id, icon, category, name}, index) {
    return(
      <Link to={'/position/' + id} key={index} className={classes.position} onClick={scrollTop()}>
        <img className={classes.icon} src={`/img/${typeLink[category]}.svg`} alt={category} title={category}/>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.category}>{category}</p>
      </Link>
    )
  }
}

export default HotOpenings
