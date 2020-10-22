import { BookListActionTypes } from './types'

const setSearchQuery = (query: string) => {
  return {
    type: BookListActionTypes.SET_SEARCH_QUERY,
    payload: {
      query,
    },
  }
}

export const BookListActions = {
  setSearchQuery,
}
