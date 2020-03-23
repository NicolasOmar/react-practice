import axios from 'axios'
// IMPORT IDS
import dataConfig from '../config/data'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${dataConfig.CLIENT_ID}`
  }
})