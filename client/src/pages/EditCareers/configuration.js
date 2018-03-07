export const options = {

  categories: [
    {
      text: 'Development',
      value: 'Development',
      image: { src: '/img/dev.svg' },
      selected: true

    },
    {
      text: 'Quality Assurance',
      value: 'Quality Assurance',
      image: { src: '/img/qa.svg' },
    },
    {
      text: 'Customer Service',
      value: 'Customer Service',
      image: { src: '/img/service.svg' },
    }
  ],

  types: [
    {
      text: 'Fulltime',
      value: 'Fulltime'
    }
  ],

  locations: [
    {
      text: 'Kiev, Ukraine',
      value: 'Kiev, Ukraine',
      flag: 'ua'
    }
  ]

}

export const columns = {
  id: 'Id',
  timestamp: 'Created in',
  name: 'Name',
  category: 'Category',
  type: 'Type',
  geography: 'Location',
  hot: 'Hot'
}
