import React, { ChangeEvent, FC, FormEvent } from 'react'

import { Input } from '../index'
import { Button } from '../index'

import styles from './SearchBar.module.css'

interface ISearchBar {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (value: string) => void
  testId?: string
}

export const SearchBar: FC<ISearchBar> = ({
  onChange,
  onSubmit,
  testId,
  value,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onSubmit(value)
  }

  return (
    <form
      data-testid={testId}
      className={styles.container}
      onSubmit={handleSubmit}
    >
      <Input
        testId="searchInput"
        onChange={onChange}
        placeholder="Search books"
        isSearchInput
        value={value}
      />
      <Button disabled={!value} isSearchButton testId="searchButton">
        Search
      </Button>
    </form>
  )
}
