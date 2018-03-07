import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Field, reduxForm } from 'redux-form'
import { Helmet } from 'react-helmet'
import { identity, humanizedRequests } from 'index/constants'
import { Redirect } from 'react-router-dom'
import { combineClasses as combine } from 'index/helpers'
import Header from 'containers/Header'

import classes from './styles.scss'

@reduxForm({
  form: 'login',
  validate
})
@connect(
  state => ({
    user: state.user,
    data: state.form.login
  }),
  dispatch => ({
    logIn: formData => dispatch({
      type: 'user/LOGIN_START',
      payload: formData
    })
  })
)
class Login extends Component {
  render() {
    let { error = ''} = this.props.user,
        { user, handleSubmit, logIn } = this.props,
        { login, password } = inputOptions
    return user.rank
      ? <Redirect to='/admin'/>
      : [
      <Header key={1}/>,
      <main key={2} className={classes.container}>
        <Helmet>
          <title>{"Login to continue | " + identity.companyName}</title>
          <meta property="og:title" content={identity.companyName + " - Login to continue"}/>
        </Helmet>
        <div className={classes.panel}>
          <div className={combine(classes.error, classes.error__login, error && classes.error__active)}>{humanizedRequests[error]}</div>
          <Form className={classes.form} onSubmit={handleSubmit(logIn)}>
            <Field name="login" component={Input} disabled={user.loading} type="text" placeholder="login" maxLength={login.maxLength} autoFocus/>
            <Field name="password" component={Input} disabled={user.loading} type="password" placeholder="password" maxLength={password.maxLength}/>
            <button className={classes.button} disabled={user.loading} type="submit">{user.loading ? 'sending...' : 'send'}</button>
          </Form>
        </div>
      </main>
    ]
  }
}

function Input({input, meta: {touched, error}, ...custom}) {
  const hasError = touched && error
  return (
    <label>
      <input {...input} {...custom} className={combine(classes.input, hasError && classes.input__error)}/>
      <p className={combine(classes.error, hasError && classes.error__active)}>{error}</p>
    </label>
  )
}

function validate(values) {
  const errors = {}

  Object.keys(inputOptions).forEach(key => {
    let value = values[key],
        { required, minLength, maxLength, pattern } = inputOptions[key]

    if (required && !value) errors[key] = 'Required'
    else if (minLength && value.length < minLength) errors[key] = 'Must have at least ' + minLength + ' chars'
    else if (maxLength && value.length > maxLength) errors[key] = 'Couldn`t have more than ' + maxLength + ' chars'
    else if (pattern && !value.match(pattern)) errors[key] = 'Have unexpected chars'
  })

  return errors
}

const inputOptions = {
  login: {
    required: true,
    minLength: 4,
    maxLength: 16,
    pattern: /^[A-Za-z0-9_]{4,16}$/
  },
  password: {
    required: true,
    minLength: 4,
    maxLength: 32,
    pattern: /^[A-Za-z0-9!@#$%^&*()_]{4,32}$/
  }
}

export default Login
