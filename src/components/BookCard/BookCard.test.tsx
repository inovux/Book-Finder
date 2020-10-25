import React from 'react'
import { render } from '@testing-library/react'

import { BookCard } from './index'

test('should render image', () => {
  const { getByTestId } = render(
    <BookCard
      title="Harry Potter"
      imageUrl="abc"
      author="Stanley"
      bookUrl="abc"
      publishedBy="Kentucky publishing"
    />
  )
})

test('should render author name', () => {
  const { getByTestId } = render(
    <BookCard
      title="Harry Potter"
      imageUrl="abc"
      author="Stanley"
      bookUrl="abc"
      publishedBy="Kentucky publishing"
    />
  )
})

test('should render published by text', () => {
  const { getByTestId } = render(
    <BookCard
      title="Harry Potter"
      imageUrl="abc"
      author="Stanley"
      bookUrl="abc"
      publishedBy="Kentucky publishing"
    />
  )
})

test('should render title', () => {
  const { getByTestId } = render(
    <BookCard
      title="Harry Potter"
      imageUrl="abc"
      author="Stanley"
      bookUrl="abc"
      publishedBy="Kentucky publishing"
    />
  )
})

test('should render button', () => {
  const { getByTestId } = render(
    <BookCard
      title="Harry Potter"
      imageUrl="abc"
      author="Stanley"
      bookUrl="abc"
      publishedBy="Kentucky publishing"
    />
  )
})
