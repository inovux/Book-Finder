import { useReducer } from 'react'

import { BookListActions } from '../../actions'
import { bookListReducer } from '../../reducers'
import { booksApi } from '../../api'

interface IInjectedBookListRenderProps {
  books: any[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  getBooksBySearchTerm: (searchTerm: string) => void
}

interface IBookListContainer {
  children: (props: IInjectedBookListRenderProps) => JSX.Element
}

export interface IBookListState {
  // TODO: Add IBook type that is returned from API
  books: any[]
  searchQuery: string
}

const initialBookListState = {
  books: [],
  searchQuery: '',
}

export const BookListContainer = ({ children }: IBookListContainer) => {
  const [booksList, dispatch] = useReducer(
    bookListReducer,
    initialBookListState
  )

  const getBooksBySearchTerm = async (searchTerm: string) => {
    try {
      const { data } = await booksApi.get('/volumes', {
        params: {
          q: searchTerm,
        },
      })

      dispatch(BookListActions.setBooks(data.items))
    } catch {
      console.log('ERROR')
    }
  }

  const { books, searchQuery } = booksList

  const setSearchQuery = (query: string) => {
    dispatch(BookListActions.setSearchQuery(query))
  }

  return children({ books, searchQuery, setSearchQuery, getBooksBySearchTerm })
}
