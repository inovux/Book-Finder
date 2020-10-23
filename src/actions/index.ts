import { BookListActionTypes } from './types'

const setSearchQuery = (query: string) => {
  return {
    type: BookListActionTypes.SET_SEARCH_QUERY,
    payload: {
      query,
    },
  }
}

export const setBooks = (books: any[]) => {
  return {
    type: BookListActionTypes.SET_BOOKS,
    payload: {
      books,
    },
  }
}

export const BookListActions = {
  setSearchQuery,
  setBooks,
}
