import React, { ChangeEvent, FC, MouseEvent } from 'react'

import styles from './SearchBar.module.css'
import { Input } from '../Input'
import { Button } from '../Button'

interface ISearchBar {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: MouseEvent<HTMLButtonElement>) => void
  testId?: string
}

export const SearchBar: FC<ISearchBar> = ({ testId }) => {
  return (
    <div data-testid={testId} className={styles.container}>
      <Input testId="searchInput" placeholder="Search books" />
      <Button testId="searchButton">Search</Button>
    </div>
  )
}
