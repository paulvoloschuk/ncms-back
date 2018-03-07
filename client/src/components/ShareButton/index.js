import React, { Component } from 'react'
import classes from './styles.scss'
import { combineClasses as combine } from 'index/helpers'

function ClickHandler (event) {
  let {href, title} = event.target.attributes
  window.open(href.nodeValue, title.nodeValue, 'width=600,height=400');
  event.preventDefault()
  return false
}


export default {
  Linkedin: ({url = window.location.origin, title, description}) =>
    <a className={combine(classes.button, classes.linkedin)}
      target="_blank"
      title="Share on Linkedin"
      onClick={ClickHandler}
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURI(title)}&summary=${encodeURI(description)}&source=${url}`}
    >
      Share
    </a>,
    Facebook: ({url = window.location.origin, title, description}) =>
      <a className={combine(classes.button, classes.facebook)}
        target="_blank"
        title="Share on Facebook"
        onClick={ClickHandler}
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURI(title)}`}
      >
        Share
      </a>
}
