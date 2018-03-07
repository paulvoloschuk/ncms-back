import { syncFlag } from 'index/sync'

export default function () {
  return next => action => {
    syncFlag.set(action.type === 'ABtests/CHANGE_VALUES')
    next(action)
  }
}
