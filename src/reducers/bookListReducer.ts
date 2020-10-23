import { BookListActionTypes, IAction } from '../actions/types'
import { IBookListState } from '../containers/BookListContainer'

export const bookListReducer = (state: IBookListState, action: IAction) => {
  switch (action.type) {
    case BookListActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.query,
      }
    case BookListActionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
      }
    default:
      return state
  }
}
