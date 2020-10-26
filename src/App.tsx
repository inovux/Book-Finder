import React, { ChangeEvent, FC } from 'react'

import { BookList, ErrorBox, Loader, Page, SearchBar } from './components'
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
              {hasError ? (
                <ErrorBox message="An error has occurred." />
              ) : isLoading ? (
                <Loader />
              ) : (
                <BookList books={books} />
              )}
            </>
          )
        }}
      </BookListContainer>
    </Page>
  )
}
