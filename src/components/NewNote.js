import { useDispatch } from 'react-redux/es/exports'
import { uploadContent } from '../reducers/filterReducer'
import { createNote } from '../reducers/noteReducer'

export default function NewNote() {
  const dispatch = useDispatch()

  const addNote = async (evt) => {
    evt.preventDefault()
    const { target } = evt
    const content = target.note.value
    target.note.value = ''
    dispatch(createNote(content))
    dispatch(uploadContent(content))
  }
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>Add</button>
    </form>
  )
}
