import React from 'react'
import { render } from '@testing-library/react'

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
    <SearchBar value="" onChange={() => 'change'} onSubmit={() => 'submit'} />
  )
})

test('should change input value', () => {
  const { getByTestId } = render(
    <SearchBar value="" onChange={() => 'change'} onSubmit={() => 'submit'} />
  )
})

test('should submit correct value', () => {
  const { getByTestId } = render(
    <SearchBar value="" onChange={() => 'change'} onSubmit={() => 'submit'} />
  )
})
