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

  const image = getByTestId('bookCardImage')

  expect(image).toBeInTheDocument()
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

  const author = getByTestId('bookCardAuthor')

  expect(author).toBeInTheDocument()
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

  const publisher = getByTestId('bookCardPublisher')

  expect(publisher).toBeInTheDocument()
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

  const title = getByTestId('bookCardTitle')

  expect(title).toBeInTheDocument()
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

  const button = getByTestId('bookCardButton')

  expect(button).toBeInTheDocument()
})
