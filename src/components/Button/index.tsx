import React, { FC, MouseEvent } from 'react'

import styles from './Button.module.css'

interface IButton {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  isSearchButton?: boolean
  testId?: string
}

export const Button: FC<IButton> = ({
  children,
  isSearchButton,
  onClick,
  testId,
}) => {
  return (
    <button
      data-testid={testId}
      className={`${styles.container} ${
        isSearchButton ? styles.searchButton : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
