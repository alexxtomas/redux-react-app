import { useDispatch, useSelector } from 'react-redux/es/exports'
import { toggleImportanceOf } from '../reducers/noteReducer'

export default function Notes() {
  // Indicamos que parte del estado queremos que nos devuelva la store proporcionada por el Provider y nos subscribimos
  let notes = useSelector((state) => state.notes)
  const filter = useSelector((state) => state.filter)
  // Funciona como un dispatch pero sin tener que hacer el store.dispatch
  const dispatch = useDispatch()
  const toggleImprotance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  // console.log(notes)
  // console.log(filter)

  // let noteAddes = null

  let arry = []
  if (filter.length !== 0) {
    if (filter === true) console.log('0a')
    if (filter !== notes) {
      filter.map((note) => {
        if (note.important === true) arry.push(true)
        if (note.important === false) arry.push(false)
      })
    }
  }
  console.log(arry)

  return (
    <ul>
      {notes.map((note) => {
        return (
          <li key={note.id} onClick={() => toggleImprotance(note.id)}>
            {note.content}{' '}
            <strong>{note.important ? 'important' : 'not important'}</strong>
          </li>
        )
      })}
    </ul>
  )
}
