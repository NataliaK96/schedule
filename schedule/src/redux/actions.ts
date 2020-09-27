import { ScheduleActionTypes, IEvent } from './types'
import { api } from '../api/api'

export const initAction = () => ({
  type: ScheduleActionTypes.__INIT__,
})

export const setLoading = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_LOADING,
    payload: value,
  }
}

export const setError = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_ERROR,
    payload: value,
  }
}

export const setEventInfoIsVisible = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_EVENT_INFO_IS_VISIBLE,
    payload: value,
  }
}

export const setEventEditIsVisible = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_EVENT_EDIT_IS_VISIBLE,
    payload: value,
  }
}

export const getScheduleAsync = () => async (dispatch: any) => {
  dispatch(setLoading(true))
  let schedule
  try {
    schedule = await fetch(api.getUrlEvents())
    schedule = await schedule.json()
  } catch {}
  dispatch({
    type: ScheduleActionTypes.FETCH_SCHEDULE,
    payload: schedule.data,
  })
  dispatch(setLoading(false))
}

export const postEvent = (event: IEvent) => async (dispatch: any) => {
  dispatch(setLoading(true))
  try {
    await fetch(api.getUrlEvent(), {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch(getScheduleAsync())
  } catch {
    dispatch(setError(true))
  }
  dispatch(setLoading(false))
}
