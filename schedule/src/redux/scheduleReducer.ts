import { ScheduleActionTypes, ISchedule, Role, Template } from './types'
import { initAction } from './actions'

const initialState: ISchedule = {
  isLoading: false,
  isError: false,
  role: Role.student,
  events: [],
  template: Template.table,
  isCalendarEventShown: false,
  calendarEventId: '',
}
export const scheduleReducer = (
  state = initialState,
  action: { type: string; payload?: any } = initAction()
) => {
  switch (action.type) {
    case ScheduleActionTypes.FETCH_SCHEDULE:
      return { ...state, events: action.payload }
    case ScheduleActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case ScheduleActionTypes.SET_ERROR:
      return { ...state, isError: action.payload }
    case ScheduleActionTypes.SHOW_CALENDAR_EVENT:
      return { ...state, isCalendarEventShown: action.payload }
    case ScheduleActionTypes.SET_CALENDAR_EVENT_ID:
      return { ...state, calendarEventId: action.payload }
    default:
      return state
  }
}
