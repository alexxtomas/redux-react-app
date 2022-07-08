import { useSelector, useDispatch } from 'react-redux'
import {
  importantFilter,
  notImportantFilter,
  showAll
} from '../reducers/filterReducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes)

  const filtredSelected = async (value) => {
    if (value === 'ALL') {
      dispatch(showAll(notes))
    }
    if (value === 'IMPORTANT') {
      dispatch(importantFilter(notes))
    }
    if (value === 'NOT_IMPORTANT') {
      dispatch(notImportantFilter(notes))
    }
  }

  return (
    <>
      <div>
        all
        <input
          type="radio"
          name="filter"
          onChange={() => filtredSelected('ALL')}
        />
        important
        <input
          type="radio"
          name="filter"
          onChange={() => filtredSelected('IMPORTANT')}
        />
        not important
        <input
          type="radio"
          name="filter"
          onChange={() => filtredSelected('NOT_IMPORTANT')}
        />
      </div>
    </>
  )
}

export default VisibilityFilter
