import React, { FC } from 'react'

import { Page } from './components'
import { SearchBar } from './components'

export const App: FC = () => {
  return (
    <Page title="Book Finder">
      <SearchBar
        value=""
        onChange={() => 'change'}
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
    </Page>
  )
}
