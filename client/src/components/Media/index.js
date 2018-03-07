import React from 'react'
import ReactMedia from 'react-media'
import {mediaBreakPoints} from 'index/constants'

export function match (onTrue, onFalse) {
  return state => state
    ? onTrue
    : onFalse
}

function Media ({children, from, to}) {
  let query = [
    (from && mediaBreakPoints[from]) ? `(min-width: ${mediaBreakPoints[from]}px)` : undefined,
    (to && mediaBreakPoints[to]) ? `(max-width: ${mediaBreakPoints[to] - 1}px)` : undefined
  ].filter(a => a).join(' and ')
  console.log(query);
return (
  <ReactMedia query={query}>
    {children}
  </ReactMedia>
)

}

export default Media
