import React, {Component} from 'react'
import classes from './styles.scss'
import data from './data'

const Img = ({src, style, ...rest}) =>
  <div className={classes.img} style={{...style, backgroundImage:`url(/img/life/${src})`}} {...rest}/>

const Quotes = ({text, author, ...rest}) =>
  <div className={classes.quotes} {...rest}>
    <p>{text}</p>
    <span>{author}</span>
  </div>

class LifeSlider extends Component {

  render() {

    return (
      <div className={classes.lifeSlider}>
        {data.map(({column, row, src, text, author}, index) => {
          let style = {
            gridColumn: column.join('/'),
            gridRow: row.join('/')
          },
          Component = src ? Img : Quotes
          console.log(style);
          return <Component {...{style, text, author, src}} />
        })}
      </div>
    )
  }
}

export default LifeSlider
