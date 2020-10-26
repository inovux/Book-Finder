import React, { ChangeEvent, FC } from 'react'

import { BookList, ErrorBox, Loader, Page, SearchBar } from './components'
import { BookListContainer } from './containers'
import { BookCard } from './components/BookCard'

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
                <BookList>
                  {books.map((book) => {
                    const {
                      authors,
                      imageLinks,
                      previewLink,
                      title,
                      publisher,
                    } = book.volumeInfo

                    console.log(authors)

                    return (
                      <BookCard
                        key={book.id}
                        author={authors || 'Unknown'}
                        bookUrl={previewLink}
                        imageUrl={imageLinks && imageLinks.smallThumbnail}
                        publishedBy={publisher}
                        title={title}
                      />
                    )
                  })}
                </BookList>
              )}
            </>
          )
        }}
      </BookListContainer>
    </Page>
  )
}
