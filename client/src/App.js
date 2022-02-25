import React from 'react'
import { useRoutes } from './routes'

export const App = () => {

  const route = useRoutes()

  return (
    <div className="app">
      { route }
    </div>
  )
}

