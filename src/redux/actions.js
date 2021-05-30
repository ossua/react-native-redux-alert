import types from './types'
import { types as alertTypes } from './constants'

const clear = () => ({
  type: types.CLEAR,
})

const show = (message, duration = 5000, type = alertTypes.INFO) => ({
  type: types.SHOW,
  payload: {
    message, duration, type,
  },
})

const showError = (message, duration = 5000) => show(message, duration, alertTypes.ERROR)
const showSuccess = (message, duration = 5000) => show(message, duration, alertTypes.SUCCESS)
const showWarning = (message, duration = 5000) => show(message, duration, alertTypes.WARNING)
const showInfo = (message, duration = 5000) => show(message, duration, alertTypes.INFO)

export default {
  show, showError, showSuccess, showWarning, showInfo, clear,
}
