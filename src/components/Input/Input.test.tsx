import React from 'react'
import userEvent from '@testing-library/user-event'

import { render } from '@testing-library/react'
import { Input } from './index'

test('renders a text input with a "Search" placeholder', () => {
  const { getByPlaceholderText } = render(<Input placeholder="Search" />)

  const input = getByPlaceholderText(/search/i)

  expect(input).toHaveAttribute('type', 'text')
})

test('renders with correct value of "Book"', () => {
  const { getByPlaceholderText } = render(
    <Input value="Book" placeholder="Search" />
  )

  const input = getByPlaceholderText(/search/i)

  expect(input).toHaveValue('Book')
})

test('renders correct value after typing', () => {
  const { getByPlaceholderText } = render(<Input placeholder="Search" />)

  const input = getByPlaceholderText(/search/i)

  userEvent.type(input, 'Book')

  expect(input).toHaveValue('Book')
})
