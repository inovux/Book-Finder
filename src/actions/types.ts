export interface IAction {
  type: string
  payload: { [key: string]: any }
}

export enum BookListActionTypes {
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  SET_BOOKS = 'SET_BOOKS',
  SET_IS_LOADING = 'SET_IS_LOADING',
}
