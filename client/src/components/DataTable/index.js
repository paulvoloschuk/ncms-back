import React, { Component } from 'react'
import { connect } from 'react-redux'
import { combineClasses as combine } from 'index/helpers'

import classes from './styles.scss'

function DataTable ({data, columns, selections, onSelect}) {
  let selectCallback = onSelect ? id => () => onSelect(id) : () => {},
      captions = Object.values(columns).map((item, colIndex) =>
        <th key={colIndex}>{item}</th>
      ),
      rows = data && data.map((position, rowIndex) =>
        <tr key={rowIndex} className={selections.indexOf(rowIndex) + 1 && classes.selected} onClick={selectCallback(rowIndex)}>
          {Object.keys(columns).map((item, colIndex) =>
            <td key={colIndex}>{position[item]}</td>
          )}
        </tr>
      )
  return data
    ? <table>
        <thead>
          <tr>
            {captions}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    : <div className={classes.loading}></div>
}

export default DataTable
