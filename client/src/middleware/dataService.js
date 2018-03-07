import axios from 'axios'
import { apiEntryPoints, loadDelay } from 'index/constants'

const dataService = ({dispatch, getState}) => next => action => {
  let { type, payload, loadingIndicator } = action,
      state = getState()
  axios.defaults.headers['x-access-token'] = state.user.token || null

  switch (type) {

    case 'positions/FETCH_START': {
      setTimeout(() => axios
        .get(apiEntryPoints.positions)
        .then(response => dispatch({
          type: 'positions/FETCH_SUCCESS',
          payload: response.data
        }))
        .catch(e => dispatch({
          type: 'positions/FETCH_ERROR',
          payload: e
        })),
        loadDelay
      )
      break
    }

    case 'positions/PUT_START': {
      loadingIndicator(true)
      setTimeout(() => axios
        .put(apiEntryPoints.positions, payload)
        .then(response => {
          dispatch({type: 'positions/PUT_SUCCESS', payload})
          loadingIndicator(false, response.status || 200)
        })
        .then(() => dispatch({type: 'positions/FETCH_START'}))
        .catch(e => {
          dispatch({type: 'positions/PUT_ERROR'})
          loadingIndicator(false, e.response.status || 500)
        }),
        loadDelay
      )
      break
    }

    case 'positions/PATCH_START': {
      loadingIndicator(true)
      setTimeout(() => axios
        .patch(apiEntryPoints.positions, payload)
        .then(response => {
          dispatch({type: 'positions/PATCH_SUCCESS', payload})
          loadingIndicator(false, response.status || 200)
        })
        .then(() => dispatch({type: 'positions/FETCH_START'}))
        .catch(e => {
          dispatch({type: 'positions/PATCH_ERROR'})
          loadingIndicator(false, e.response.status || 500)
        }),
        loadDelay
      )
      break
    }

    case 'positions/DELETE_START': {
      let indexes = payload,
          id = indexes.map(index => state.positions[index].id)

      setTimeout(() => axios
        .delete(apiEntryPoints.positions, {data: {id}})
        .then(response => {
          dispatch({type: 'positions/DELETE_SUCCESS', payload: indexes})
        })
        .catch(e => {
          dispatch({type: 'positions/DELETE_ERROR', payload: e})
        }),
        loadDelay
      )
      break
    }

    case 'user/LOGIN_START': {
      setTimeout(() => axios
        .post(apiEntryPoints.login, payload)
        .then(response => dispatch({
          type: 'user/LOGIN_SUCCESS',
          payload: response.data
        }))
        .catch(e => dispatch({
          type: 'user/LOGIN_ERROR',
          payload: e.response.status || 500
        })),
        loadDelay
      )
      break
    }

  }

  next(action)
}

export default dataService
