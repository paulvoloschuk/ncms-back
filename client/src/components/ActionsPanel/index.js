import React, { Component } from 'react'
import { combineClasses as combine, randomInteger } from 'index/helpers'
import { Button } from 'semantic-ui-react'
import classes from './styles.scss'

const KEY = randomInteger()

function ActionsPanel ({confirm, rowsAmmount, onConfirm, onAction}) {
  let confirmCallback = onConfirm ? state => () => onConfirm(state) : () => {},
      actionsCallback = onAction ? action => () => onAction(action) : () => {},
      buttons = confirm
        ? <Button.Group>
            <Button onClick={confirmCallback(false)}>Cancel</Button>
            <Button.Or />
            <Button positive onClick={confirmCallback(true)}>Save</Button>
          </Button.Group>
        : [
            !rowsAmmount ?      <Button inverted key={KEY + 3} onClick={actionsCallback('add')} color="green">Add</Button> : null,
            rowsAmmount ?       <Button key={KEY + 4} onClick={actionsCallback('cancel')} color="grey">Unselect</Button> : null,
            (rowsAmmount == 1) ? <Button inverted key={KEY + 5} onClick={actionsCallback('edit')} color="orange">Edit</Button> : null,
            rowsAmmount ?      <Button inverted key={KEY + 6} onClick={actionsCallback('delete')} color="red">Delete</Button> : null
        ],
      selectedRows = rowsAmmount ? <span>{rowsAmmount} row(s)</span> : null


  return (
    <div className={classes.panel}>
      {selectedRows}
      {buttons}
    </div>
  )
}

export default ActionsPanel
