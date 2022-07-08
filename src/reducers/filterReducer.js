export const filterReducer = (state = [], action) => {
  if (action.type === '@filter/ALL') {
    return action.payload
  }
  if (action.type === '@filter/IMPORTANT') {
    console.log(action.payload.filter((note) => note.important === true))
    return action.payload.filter((note) => note.important === true)
  }

  if (action.type === '@filter/NOT_IMPORTANT') {
    return action.payload.filter((note) => note.important === false)
  }

  if (action.type === '@filter/UPLOAD_CONTENT') {
    return [...state, action.payload]
  }

  return state
}

// export initState = () => {

// }

export const showAll = (notes) => {
  return {
    type: '@filter/ALL',
    payload: notes
  }
}

export const importantFilter = (notes) => {
  return {
    type: '@filter/IMPORTANT',
    payload: notes
  }
}

export const notImportantFilter = (notes) => {
  return {
    type: '@filter/NOT_IMPORTANT',
    payload: notes
  }
}

export const uploadContent = (note) => {
  return {
    type: '@filter/upload',
    payload: note
  }
}
