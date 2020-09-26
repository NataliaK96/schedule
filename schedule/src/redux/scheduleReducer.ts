import { ScheduleActionTypes, ISchedule, Role, Template } from './types';
import { initAction } from './actions';

const initialState: ISchedule = {
  isLoading: false,
  isError: false,
  role: Role.student,
  events: [],
  template: Template.table,
  timeZone: { name: 'Default', offset: -240 },
};
export const scheduleReducer = (
  state = initialState,
  action: { type: string; payload?: any } = initAction()
) => {
  switch (action.type) {
    case ScheduleActionTypes.FETCH_SCHEDULE:
      return { ...state, events: action.payload };
    case ScheduleActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ScheduleActionTypes.SET_ERROR:
      return { ...state, isError: action.payload };
    case ScheduleActionTypes.SET_TIMEZONE:
      return { ...state, timeZone: action.payload };
    case ScheduleActionTypes.SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
