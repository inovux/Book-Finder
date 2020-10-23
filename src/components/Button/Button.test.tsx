import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './index'

test("renders button with given 'Search' text", () => {
  const { getByText } = render(<Button>Search</Button>)

  const button = getByText(/search/i)

  expect(button).toBeInTheDocument()
})

test('calls given function when button is clicked', () => {
  const fn = jest.fn()

  const { getByText } = render(<Button onClick={fn}>Search</Button>)

  const button = getByText(/search/i)

  userEvent.click(button)
  userEvent.click(button)

  expect(fn).toHaveBeenCalledTimes(2)
})

test('cant click the button when disabled', () => {
  const fn = jest.fn()

  const { getByText } = render(
    <Button disabled onClick={fn}>
      Search
    </Button>
  )

  const button = getByText(/search/i)

  userEvent.click(button)
  userEvent.click(button)

  expect(fn).toHaveBeenCalledTimes(0)
})
