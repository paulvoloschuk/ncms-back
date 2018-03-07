import React, { Component } from 'react'
import { connect } from 'react-redux'
import { scrollTop } from 'index/helpers'
import { Link } from 'react-router-dom'
import classes from './styles.scss'

let init = false

const typeLink = {
  'Development': 'dev',
  'Customer Service': 'service',
  'Quality Assurance': 'qa',
}

@connect(
  state => ({
    data: state.positions
  }),
  dispatch => ({
    fetchPositions: () => dispatch({type: 'positions/FETCH_START'})
  })
)
class Positions extends Component {
  componentDidMount() {
    if(!init && !this.props.data) {
      this.props.fetchPositions()
      init = false
    }
  }
  render() {
    let { data } = this.props,
        content = data
          ? data.map(this.renderItem)
          : <div className={classes.loading}></div>

    return (
      <div className={classes.container}>
        <h1>Open Positions</h1>
        {content}
      </div>
    );
  }

  renderItem(item, index) {
    let url = '/position/' + item.id
    return(
      <Link to={url} key={index} className={classes.position} onClick={scrollTop()}>
        <div className={classes.basicInfo}>
          <img className={classes.icon} src={`/img/${typeLink[item.category]}.svg`} alt={item.category} title={item.category}/>
          <h1 className={classes.name}>{item.name}</h1>
          <p className={classes.category}>{item.category}</p>
        </div>
        <p className={classes.type}>{item.type}</p>
        <p className={classes.geography}>{item.geography}</p>
        <span className={classes.apply}>Apply</span>
      </Link>
    )
  }
}

export default Positions
