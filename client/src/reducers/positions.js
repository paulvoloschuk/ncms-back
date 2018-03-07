const initialState = false

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case 'positions/FETCH_START': {
      state = false
      break
    }
    case 'positions/FETCH_SUCCESS': {
      state = payload
      break
    }
    case 'positions/FETCH_ERROR': {
      // TODO: Show button "try to load again"
      break
    }


    case 'positions/DELETE_SUCCESS': {
      state = state.filter((value, index) => !(payload.indexOf(index) + 1))
      break
    }
  }

  return (typeof state === 'boolean')
    ? state
    : [...state]
}
