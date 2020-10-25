import React, { FC } from 'react'

interface IBookCard {
  author: string
  bookUrl: string
  imageUrl: string
  publishedBy: string
  title: string
}

export const BookCard: FC<IBookCard> = () => {
  return <div>Card</div>
}
