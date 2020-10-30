import React, { FC } from 'react'

import { Button } from '../Button'

import styles from './BookCard.module.css'

interface IBookCard {
  author: string
  bookUrl: string
  imageUrl: string
  publishedBy: string
  title: string
}

export const BookCard: FC<IBookCard> = ({
  author,
  bookUrl,
  imageUrl,
  publishedBy,
  title,
}) => {
  return (
    <li className={styles.container}>
      <h2 data-testid="bookCardTitle">{title}</h2>
      <img
        width={128}
        height={196}
        data-testid="bookCardImage"
        src={imageUrl}
        className={styles.image}
      />
      <div className={styles.description}>
        {author ? (
          <p data-testid="bookCardAuthor" className={styles.author}>
            By: {author}
          </p>
        ) : null}
        {publishedBy ? (
          <p data-testid="bookCardPublisher" className={styles.publishedby}>
            Published by: {publishedBy}
          </p>
        ) : null}
        <a href={bookUrl} className={styles.button}>
          <Button testId="bookCardButton">See this Book</Button>
        </a>
      </div>
    </li>
  )
}
