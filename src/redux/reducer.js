import types from './types'

const getInitialState = () => ({
  message: null,
  duration: null,
  type: 'info',
})

export default function reducer(state = getInitialState(), action) {
  const { type, payload = {} } = action

  switch (type) {
    case types.SHOW: {
      return {
        ...state,
        ...payload,
      }
    }

    case types.CLEAR: {
      return {
        ...state,
        message: null,
        duration: null,
      }
    }

    default: {
      return state
    }
  }
}
