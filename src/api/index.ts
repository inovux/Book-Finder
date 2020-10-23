import axios from 'axios'

export const booksApi = axios.create({
  baseURL: process.env.REACT_APP_BOOK_API_URI,
  params: {
    key: process.env.REACT_APP_BOOK_API_KEY,
  },
})
