import React, { ChangeEvent, FC } from 'react'

import { Page, SearchBar } from './components'
import { BookListContainer } from './containers'

export const App: FC = () => {
  return (
    <Page title="Book Finder">
      <BookListContainer>
        {({ books, searchQuery, setSearchQuery, getBooksBySearchTerm }) => {
          const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.currentTarget.value)
          }

          return (
            <>
              <SearchBar
                value={searchQuery}
                onChange={handleSearchQuery}
                onSubmit={getBooksBySearchTerm}
              />
              <h1>list of books:</h1>
              <ul>
                {books.map((book) => {
                  return <li key={book.id}>{book.volumeInfo.title}</li>
                })}
              </ul>
            </>
          )
        }}
      </BookListContainer>
    </Page>
  )
}
