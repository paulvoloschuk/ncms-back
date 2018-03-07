import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import classes from './styles.scss'

@reduxForm({
  form: 'contact'
})
class ContactForm extends Component {
  submitHandler() {

  }
  render() {

    return (
      <form onSubmit={this.submitHandler}>
        <div className={classes.flexContainer}>
          <div className={classes.input}>
            <Field name="fullname" component="input" type="text" placeholder="fullname"/>
          </div>
          <div className={classes.input}>
            <Field name="email" component="input" type="text" placeholder="e-mail"/>
          </div>
          <div className={classes.input}>
            <Field name="subject" component="input" type="text" placeholder="subject"/>
          </div>
          <div className={classes.input}>
            <Field name="message" component="textarea" placeholder="message"/>
          </div>
          <div className={classes.input}>
            <button className={classes.submit} type="submit">send</button>
          </div>
        </div>
      </form>
    )
  }
}

export default ContactForm
