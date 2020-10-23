import React, { FC, MouseEvent } from 'react'

import styles from './Button.module.css'

interface IButton {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  isSearchButton?: boolean
  testId?: string
  disabled?: boolean
}

export const Button: FC<IButton> = ({
  children,
  isSearchButton,
  onClick,
  testId,
  disabled,
}) => {
  return (
    <button
      data-testid={testId}
      className={`${styles.container} ${
        (isSearchButton ? styles.searchButton : '',
        disabled ? styles.disabled : '')
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
