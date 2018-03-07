import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { identity } from 'index/constants'
import { combineClasses as combine } from 'index/helpers'
import DataTable from 'components/DataTable'
import ActionsPanel from 'components/ActionsPanel'
import Form from './form'
import { columns } from './configuration'
import classes from './styles.scss'

let init = false

@connect(
  state => ({
    positions: state.positions
  }),
  dispatch => ({
    fetchPositions: () => dispatch({type: 'positions/FETCH_START'}),
    updatePosition: (data, loadingIndicator) => dispatch({type: 'positions/PATCH_START', payload: data, loadingIndicator}),
    addPosition: (data, loadingIndicator) => dispatch({type: 'positions/PUT_START', payload: data, loadingIndicator}),
    deletePositions: ids => dispatch({type: 'positions/DELETE_START', payload: ids})
  })
)
class EditCareers extends Component {
  constructor() {
    super()
    this.state = {
      mode: false, // [add, edit, delete]
      confirmPanel: false,
      selections: [],
      form: {}
    }
  }
  selectHandler(id) {
    let { selections } = this.state,
        index = selections.indexOf(id) + 1
    if (index) selections.splice(index - 1, 1)
    else selections.push(id)
    this.setState({
      ...this.state,
      selections
    })
  }
  confirmHandler(value) {
    let { mode, form, selections } = this.state,
        { addPosition, updatePosition, deletePositions, positions } = this.props

        // console.log({...positions[selections[0]], ...form});
    if (value && mode === 'add') addPosition(form, this.loadingIndicator.bind(this))
    else if (value && mode === 'edit') updatePosition({...positions[selections[0]], ...form}, this.loadingIndicator.bind(this))
    else if (value && mode === 'delete') deletePositions(selections, this.loadingIndicator.bind(this))
    else this.setState({
      ...this.state,
      mode: false,
      selections: []
    })
  }
  setMode(mode) {
    if (mode === 'cancel')
      this.setState({
        ...this.state,
        selections: []
      })
    else this.setState({
      ...this.state,
      mode
    })
  }
  getFormData(data) {
    console.log(data);
    this.setState({
      ...this.state,
      form: data
    })
  }
  loadingIndicator(value, status = false) {
    this.setState({
      ...this.state,
      loading: value,
      mode: (status && !(status == 200)) ? false : this.state.mode
    })
  }
  componentDidMount() {
    if(!init) {
      this.props.fetchPositions()
      init = true
    }
  }
  render() {
    let { positions } = this.props,
        { mode, selections, loading } = this.state,
        confirmStatus = ['add', 'edit', 'delete'].indexOf(mode) + 1,
        content = null,
        lowerPanel = <ActionsPanel
                        disable={loading}
                        confirm={confirmStatus}
                        rowsAmmount={selections.length}
                        onAction={this.setMode.bind(this)}
                        onConfirm={this.confirmHandler.bind(this)}
                      />,
        upperPanel = ([false, 'delete'].indexOf(mode) + 1) ? lowerPanel : null

    switch (mode) {
      case 'add':
        content = <Form onChange={this.getFormData.bind(this)} loading={loading} />
        break;
      case 'edit':
        content = <Form onChange={this.getFormData.bind(this)} loading={loading} index={selections[0]} />
        break;
      case 'delete':
      default:
        content = <DataTable
                    data={positions}
                    columns={columns}
                    selections={selections}
                    onSelect={this.selectHandler.bind(this)}
                  />
    }


    return (
      <div className={classes.container}>
        <Helmet>
          <title>{"Careers | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Careers"}/>
        </Helmet>
        {upperPanel}
        {content}
        {lowerPanel}
      </div>
    )
  }
}

export default EditCareers
