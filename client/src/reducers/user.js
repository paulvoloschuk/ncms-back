const stateKey = 'userState',
      initialState = {
        rank: 0,
      },
      loadedState = JSON.parse(sessionStorage.getItem(stateKey))

export default (state = loadedState || initialState, {type, payload}) => {

  switch (type) {

    case 'user/LOGIN_START': {
      state.loading = true
      break
    }
    case 'user/SYNC':
    case 'user/LOGIN_SUCCESS': {
      state = payload
      sessionStorage.setItem(stateKey, JSON.stringify(payload))
      break
    }
    case 'user/LOGIN_ERROR': {
      state = {
        ...initialState,
        error: payload
      }
      // TODO: Show notifications
      break
    }
    case 'user/LOGOUT': {
      state = initialState
      sessionStorage.removeItem(stateKey)
      break
    }
  }

  return {...state}
}
