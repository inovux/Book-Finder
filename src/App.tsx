import React, { FC } from 'react'
import { Button } from './components/Button'

export const App: FC = () => {
  return (
    <div className="App">
      <Button onClick={() => console.log('button clicked')}>LuL</Button>
    </div>
  )
}
