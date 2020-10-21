import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchBar } from './index'

test('should render input and button components', () => {
  const { getByTestId } = render(
    <SearchBar value="" onChange={() => 'change'} onSubmit={() => 'submit'} />
  )

  const input = getByTestId('searchInput')
  const button = getByTestId('searchButton')

  expect(input).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})

test('should have correct value inside input', () => {
  const { getByTestId } = render(
    <SearchBar
      value="Harry Potter"
      onChange={() => 'change'}
      onSubmit={() => 'submit'}
    />
  )

  const searchInput = getByTestId('searchInput')

  expect(searchInput).toHaveValue('Harry Potter')
})

test('should handle typing inside input', () => {
  const handleChange = jest.fn()

  const { getByTestId } = render(
    <SearchBar
      value="Harry Potter"
      onChange={handleChange}
      onSubmit={() => 'submit'}
    />
  )

  const searchInput = getByTestId('searchInput')

  userEvent.type(searchInput, 'ab')

  expect(handleChange).toHaveBeenCalledTimes(2)
})

test('should submit correct value', () => {
  const handleSubmit = jest.fn((value) => value)

  const { getByTestId } = render(
    <SearchBar
      value="Harry Potter"
      onChange={() => 'change'}
      onSubmit={(value) => handleSubmit(value)}
    />
  )

  const searchButton = getByTestId('searchButton')

  userEvent.click(searchButton)

  expect(handleSubmit).toHaveBeenCalled()
  expect(handleSubmit).toHaveBeenCalledWith('Harry Potter')
})
