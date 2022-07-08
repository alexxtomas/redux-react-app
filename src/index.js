import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // El provider proporciona la store a todos los componentes que esta englobando
  <Provider store={store}>
    <App />
  </Provider>
)
