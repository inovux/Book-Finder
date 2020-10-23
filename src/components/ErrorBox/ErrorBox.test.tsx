import React from 'react'
import { render } from '@testing-library/react'

import { ErrorBox } from './index'

test('renders error with correct message', () => {
  const { getByText } = render(<ErrorBox message="An error has occurred." />)

  const button = getByText(/an error has occurred./i)

  expect(button).toBeInTheDocument()
})
