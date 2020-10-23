import React, { FC } from 'react'

import styles from './ErrorBox.module.css'

interface IErrorBox {
  message: string
}

export const ErrorBox: FC<IErrorBox> = ({ message }) => {
  return <div className={styles.container}>{message}</div>
}
