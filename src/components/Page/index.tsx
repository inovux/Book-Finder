import React, { FC } from 'react'

import styles from './Page.module.css'

export const Page: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
