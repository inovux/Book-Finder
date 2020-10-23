import React from 'react'
import { render } from '@testing-library/react'

import { Page } from './index'

test('page should render with title', () => {
  const { getByText } = render(<Page title="Page Title" />)

  const page = getByText(/page title/i)

  expect(page).toBeInTheDocument()
})
