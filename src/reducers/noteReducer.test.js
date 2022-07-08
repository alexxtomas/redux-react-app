import deepFreeze from 'deep-freeze'
import { noteReducer } from './noteReducer'

describe('noteReducer', () => {
  test('returns a new state after actions with toggle importance', () => {
    const state = [
      {
        id: 1,
        content: 'note1',
        important: false
      },
      {
        id: 2,
        content: 'note2',
        important: false
      }
    ]

    const action = {
      type: '@notes/toggle_important',
      payload: {
        id: 2
      }
    }

    // Esto lo que hace es congelar el estado y si alguien lo intenta mutar te salta un error
    deepFreeze(state)

    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(state[0])
    expect(newState).toContainEqual({
      id: 2,
      content: 'note2',
      important: true
    })
  })
})
