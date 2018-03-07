import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { combineClasses as combine } from 'index/helpers'
import { identity, humanizedRequests } from 'index/constants'
import { Form, Message, Divider, TextArea, Select, Input, Loader, Dimmer } from 'semantic-ui-react'

import { options } from './configuration'
import classes from './styles.scss'

@connect(
  state => ({
    data: state.positions
  })
)
class RowForm extends Component {
  handleChange = (e, { name, value }) => {
    let newState = {
      ...this.state,
      [name]: value
    }
    this.setState(newState)
    this.props.onChange && this.props.onChange(newState)
  }

  render () {
    let { index, data, loading } = this.props,
        row = (typeof index === 'number') ? data[index] : {}
    return (
      <div className={classes.form}>
        <Helmet>
          <title>{"Careers editing | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Careers editing"}/>
        </Helmet>
        <Message warning>
          <Message.Header>Warning!</Message.Header>
          <p>Feel free to pass any data here. No validation, so be careful.</p>
        </Message>
        <Form>
          <Dimmer inverted active={loading}>
            <Loader>Loading</Loader>
          </Dimmer>
          <Form.Group widths='equal'>
            <Form.Field name="name" defaultValue={row.name} control={Input} label='Position name' placeholder='(required)' fluid onChange={this.handleChange.bind(this)}/>
            <Form.Field name="category" defaultValue={row.category} control={Select} label='Category' placeholder='(required)' fluid selection options={options.categories} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field name="type" defaultValue={row.type} control={Select} label='Type' placeholder='(required)' fluid selection options={options.types} onChange={this.handleChange.bind(this)}/>
            <Form.Field name="geography" defaultValue={row.geography} control={Select} label='Location' placeholder='(required)' fluid selection options={options.locations} onChange={this.handleChange.bind(this)}/>
          </Form.Group>
          <Form.Field name="projectDescription" defaultValue={row.projectDescription} control={TextArea} label='Project Description' placeholder='(optional)' onChange={this.handleChange.bind(this)}/>
          <Form.Field name="hot" type="number" min={0} max={100} defaultValue={row.hot} control={Input} label='Hot Openings rank' placeholder='(optional)' onChange={this.handleChange.bind(this)}/>
          <Message info>
            <Message.Header>Notice</Message.Header>
            <p>Each line in text in inputs below is a line of list.</p>
          </Message>
          <Form.Field name="requirements" defaultValue={row.requirements} control={TextArea} label='Requirements (list)' placeholder='(required)' onChange={this.handleChange.bind(this)}/>
          <Form.Field name="responsibilities" defaultValue={row.responsibilities} control={TextArea} label='Responsibilities (list)' placeholder='(required)' onChange={this.handleChange.bind(this)}/>
          <Form.Field name="offerings" defaultValue={row.offerings} control={TextArea} label='Offerings (list)' placeholder='(required)' onChange={this.handleChange.bind(this)}/>
        </Form>
      </div>
    )
  }
}

export default RowForm
