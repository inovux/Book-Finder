import React, { ChangeEvent, FC } from 'react'

import { ErrorBox, Loader, Page, SearchBar } from './components'
import { BookListContainer } from './containers'

export const App: FC = () => {
  return (
    <Page title="Book Finder">
      <BookListContainer>
        {({
          books,
          searchQuery,
          setSearchQuery,
          getBooksBySearchTerm,
          isLoading,
          hasError,
        }) => {
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
              {hasError ? (
                <ErrorBox message="An error has occurred." />
              ) : isLoading ? (
                <Loader />
              ) : (
                <ul>
                  {books.map((book) => {
                    return <li key={book.id}>{book.volumeInfo.title}</li>
                  })}
                </ul>
              )}
            </>
          )
        }}
      </BookListContainer>
    </Page>
  )
}
