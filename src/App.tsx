import React, { ChangeEvent, FC } from 'react'

import { Page, SearchBar } from './components'
import { BookListContainer } from './containers'

export const App: FC = () => {
  return (
    <Page title="Book Finder">
      <BookListContainer>
        {({ searchQuery, setSearchQuery }) => {
          const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.currentTarget.value)
          }

          return (
            <>
              <SearchBar
                value={searchQuery}
                onChange={handleSearchQuery}
                onSubmit={(value) => console.log(value)}
              />
              <h1>list of books:</h1>
              <ul>
                <li>BookCard 1</li>
                <li>BookCard 2</li>
                <li>BookCard 3</li>
                <li>BookCard 4</li>
                <li>BookCard 5</li>
              </ul>
            </>
          )
        }}
      </BookListContainer>
    </Page>
  )
}
