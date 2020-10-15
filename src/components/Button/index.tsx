import React, { FC, MouseEvent } from 'react'

import styles from './Button.module.css'

interface IButton {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  )
}
