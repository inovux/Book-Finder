import React, { FC } from 'react'

import styles from './Page.module.css'

interface IPage {
  title: string
}

export const Page: FC<IPage> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
