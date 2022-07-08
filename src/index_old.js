import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'

// Creamos el reducer donde esta la logica de lo que pasar segun el action que utilicemos
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case '@counter/incremented':
      return state + 1
    case '@counter/decremented':
      return state - 1
    case '@counter/reseted':
      return 0
    default:
      return state
  }
}

// Creamos las acciones que mdoficaran el estado
const actionIncremented = {
  type: '@counter/incremented'
}

const actionDecremented = {
  type: '@counter/decremented'
}

const actionReseted = {
  type: '@counter/reseted'
}

// Creamos un store con el reducer creado previamarte
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Llamar al action que queremos utilizar
// store.dispatch(actionIncremented)
// store.dispatch(actionDecremented)
// store.dispatch(actionReseted)

const App = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={() => store.dispatch(actionIncremented)}>+</button>
      <button onClick={() => store.dispatch(actionDecremented)}>-</button>
      <button onClick={() => store.dispatch(actionReseted)}>Reset</button>
    </div>
  )
}

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
}

renderApp()

// Cada vez que se cabie el state se renderizara la app
store.subscribe(renderApp)
