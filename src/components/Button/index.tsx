import React, { FC, MouseEvent } from 'react'

import styles from './Button.module.css'

interface IButton {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  testId?: string
}

export const Button: FC<IButton> = ({ children, onClick, testId }) => {
  return (
    <button data-testid={testId} className={styles.container} onClick={onClick}>
      {children}
    </button>
  )
}
