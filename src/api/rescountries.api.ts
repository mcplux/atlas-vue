import axios from 'axios'

const restcountriesApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
})

export default restcountriesApi
