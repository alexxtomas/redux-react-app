import { noteReducer } from './reducers/noteReducer'
import { filterReducer } from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// El create store solo puede recibir un reducer pero con el combineReducers combinamos los dos y le pasa al store como si fuese solo uno
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

// el composeWithDevTools que le pasamos a la store proviene del paquete redux-devtools-extension y sirve para que la extension de chrome
// nos detecte la store
export const store = createStore(
  reducer,
  composeWithDevTools(
    // añadimos el middleware thunk
    applyMiddleware(thunk)
  )
)
