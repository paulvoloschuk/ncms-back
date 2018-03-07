const redirect = ({dispatch}) => next => action => {
  let {type, payload} = action

  switch (type) {
    case 'user/LOGOUT': {
        
      break
    }
  }

  next(action)
}

export default redirect
