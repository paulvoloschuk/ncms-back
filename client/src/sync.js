const storageKey = 'syncState'
const registerKey = 'syncTabs'
const sourceId = Math.floor(Math.random() * 10000)

// registration
let data = JSON.parse(localStorage.getItem(registerKey)) || []
localStorage.setItem(registerKey, JSON.stringify([
  ...data,
  sourceId
]))


function wrapRequest(data, key) {
  return {
    data,
    key,
    sourceId,
    timestamp: Date.now()
  }
}

function getData() {
  return JSON.parse(localStorage.getItem(storageKey))
}

export function createStoragePusher(store) {
  return () => {
    if (syncFlag.get())
      localStorage.setItem(
        storageKey,
        JSON.stringify(wrapRequest(store.getState()['abTests']))
      )
  }
}

export const syncFlag = {
  value: false,
  set: value => this.value = value,
  get: () => this.value
}

export function storageListener(store) {
  return event => {
    const received = getData()
    if (received && received.sourceId !== sourceId)
      store.dispatch({
        type: 'ABtests/SYNC',
        payload: received.data
      })
  }
}

export function getRelevantValues(defaultState) {
  const received = getData()
  return received ? received.data : defaultState
}

export function unregisterPage() {
  let data = JSON.parse(localStorage.getItem(registerKey))
  data.splice(data.indexOf(sourceId), 1)
  localStorage.setItem(registerKey, JSON.stringify(data))
  if (!data.length)
    localStorage.removeItem(storageKey)
}
