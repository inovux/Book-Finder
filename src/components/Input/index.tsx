import React, { ChangeEvent, FC, useState } from 'react'

interface IInput {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  value?: string
}

export const Input: FC<IInput> = ({ onChange, placeholder, value }) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      return onChange(e)
    }

    setInputValue(e.target.value)
  }

  return (
    <input
      onChange={handleOnChange}
      placeholder={placeholder}
      type="text"
      value={value || inputValue}
    />
  )
}
