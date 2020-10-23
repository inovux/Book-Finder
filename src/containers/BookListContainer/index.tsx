import { useReducer } from 'react'

import { BookListActions } from '../../actions'
import { bookListReducer } from '../../reducers'
import { booksApi } from '../../api'

interface IInjectedBookListRenderProps {
  books: any[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  getBooksBySearchTerm: (searchTerm: string) => void
  isLoading: boolean
  hasError: boolean
}

interface IBookListContainer {
  children: (props: IInjectedBookListRenderProps) => JSX.Element
}

export interface IBookListState {
  // TODO: Add IBook type that is returned from API
  books: any[]
  searchQuery: string
  isLoading: boolean
  hasError: boolean
}

const initialBookListState = {
  books: [],
  searchQuery: '',
  isLoading: false,
  hasError: false,
}

export const BookListContainer = ({ children }: IBookListContainer) => {
  const [booksList, dispatch] = useReducer(
    bookListReducer,
    initialBookListState
  )

  const getBooksBySearchTerm = async (searchTerm: string) => {
    dispatch(BookListActions.setIsLoading(true))

    try {
      const { data } = await booksApi.get('/volumes', {
        params: {
          q: searchTerm,
        },
      })

      dispatch(BookListActions.setBooks(data.items))
      dispatch(BookListActions.setIsLoading(false))
    } catch {
      dispatch(BookListActions.setHasError(true))
      dispatch(BookListActions.setIsLoading(false))
    }
  }

  const { books, searchQuery, isLoading, hasError } = booksList

  const setSearchQuery = (query: string) => {
    dispatch(BookListActions.setSearchQuery(query))
  }

  return children({
    books,
    searchQuery,
    setSearchQuery,
    getBooksBySearchTerm,
    isLoading,
    hasError,
  })
}
