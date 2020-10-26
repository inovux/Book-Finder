import React, { FC } from 'react'

import styles from './BookList.module.css'

export const BookList: FC = ({ children }) => {
  return <ul className={styles.container}>{children}</ul>
}
