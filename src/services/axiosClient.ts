import axios from 'axios'

const axiosClientTmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    api_key: process.env.API_KEY,
    language: 'en-US'
  }
})

export default axiosClientTmdb
