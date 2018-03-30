const __DEV__  = process.env.NODE_ENV === 'development',
      __PROD__ = process.env.NODE_ENV === 'production',
      __TEST__ = process.env.NODE_ENV === 'testing'

// Used to revrite parts of application according to current device mode
export const mediaBreakPoints = {
  mobile: 600,
  tablet: 1000,
  desktop: 1400,
}

export const navigationItems = {
  About: '/#about',
  Processes: '/process',
  Careers: '/careers',
  Contacts: '/#contacts'
}

export const socialGroups = {
  LinkedIn: '#',
  Facebook: '#'
}

export const identity = {
  companyName: 'SD Solutions',
}

const baseUrl = __DEV__ ? '//localhost:3002/' : ''
export const apiEntryPoints = {
  positions: baseUrl + 'api/position',
  login: baseUrl + 'api/user'
}

export const humanizedRequests = {
  '412': 'Wrong input data',
  '500': 'Server error'
}

export const randomBorders = {
  min: 1,
  max: 100000
}

export const careersQuantity = 8

export const loadDelay = 1500
