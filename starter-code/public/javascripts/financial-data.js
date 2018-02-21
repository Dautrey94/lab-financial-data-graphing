const axios = require('axios')

const bitcoinApi = axios.create({
    baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json'
})

function getBitcoinInfo() {
  axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
  .then(response => {
    console.log(response.data)
  })
  .catch(err => {
    console.error(err)
  })
  
}

getBitcoinInfo()

