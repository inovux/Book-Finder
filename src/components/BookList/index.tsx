import React, { FC } from 'react'

interface IBooksList {
  books: any[]
}

import styles from './BookList.module.css'
import { BookCard } from '../BookCard'

export const BookList: FC<IBooksList> = ({ books }) => {
  if (!books.length) {
    return (
      <div className={styles.container}>
        Enter a title and press search to find your favourite book :)
      </div>
    )
  }

  if (books.length && books[0].id === 'noBooks') {
    return <div className={styles.container}>No books found</div>
  }

  return (
    <ul className={styles.container}>
      {books.map((book: any) => {
        const {
          authors,
          imageLinks,
          previewLink,
          title,
          publisher,
        } = book.volumeInfo

        return (
          <BookCard
            key={book.id}
            author={authors}
            bookUrl={previewLink}
            imageUrl={imageLinks && imageLinks.smallThumbnail}
            publishedBy={publisher}
            title={title}
          />
        )
      })}
    </ul>
  )
}
