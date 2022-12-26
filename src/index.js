import React from 'react'
import ReactDOM from 'react-dom'

import ThemeProvider from './providers/ThemeProvider'
import Root from './Components/Root'


import './index.scss'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

