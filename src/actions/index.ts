import { BookListActionTypes } from './types'

const setSearchQuery = (query: string) => {
  return {
    type: BookListActionTypes.SET_SEARCH_QUERY,
    payload: {
      query,
    },
  }
}

const setBooks = (books: any[]) => {
  return {
    type: BookListActionTypes.SET_BOOKS,
    payload: {
      books,
    },
  }
}

const setIsLoading = (isLoading: boolean) => {
  return {
    type: BookListActionTypes.SET_IS_LOADING,
    payload: {
      isLoading,
    },
  }
}

export const BookListActions = {
  setSearchQuery,
  setBooks,
  setIsLoading,
}
