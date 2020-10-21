import React, { FC } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Page } from './components/Page'

export const App: FC = () => {
  return (
    <Page>
      <h1>Book Finder</h1>
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
