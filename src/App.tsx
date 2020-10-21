import React, { FC } from 'react'
import { Button } from './components'
import { Input } from './components'
import { Page } from './components'

export const App: FC = () => {
  return (
    <Page title="Book Finder">
      <Input placeholder="Search books" />
      <Button onClick={() => console.log('button clicked')}>Search</Button>
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
