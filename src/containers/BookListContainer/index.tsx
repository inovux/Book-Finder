import React, { FC, useReducer } from 'react'

import { BookListActions } from '../../actions'
import { bookListReducer } from '../../reducers'

interface IInjectedBookListRenderProps {
  books: {}[]
  searchQuery: string
  setSearchQuery: (query: string) => void
}

interface IBookListContainer {
  children: (props: IInjectedBookListRenderProps) => JSX.Element
}

export interface IBookListState {
  // TODO: Add IBook type that is returned from API
  books: {}[]
  searchQuery: string
}

const initialBookListState = {
  books: [],
  searchQuery: '',
}

export const BookListContainer: FC<IBookListContainer> = ({ children }) => {
  const [booksList, dispatch] = useReducer(
    bookListReducer,
    initialBookListState
  )

  const { books, searchQuery } = booksList

  const setSearchQuery = (query: string) => {
    dispatch(BookListActions.setSearchQuery(query))
  }

  return children({ books, searchQuery, setSearchQuery })
}
