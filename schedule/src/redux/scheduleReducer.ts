import { ScheduleActionTypes, ISchedule, Role, Template } from './types';
import { initAction } from './actions';

const initialState: ISchedule = {
  isLoading: false,
  isError: false,
  isPosting: false,
  role: Role.student,
  events: [],
  template: Template.table,
  timeZone: { name: 'Default', offset: -240 },
  csv: '',
  eventEditIsVisible: false,
  eventInfoIsVisible: false,
};
export const scheduleReducer = (
  state = initialState,
  action: { type: string; payload?: any } = initAction()
): ISchedule => {
  switch (action.type) {
    case ScheduleActionTypes.FETCH_SCHEDULE:
      return { ...state, events: action.payload };
    case ScheduleActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ScheduleActionTypes.SET_ERROR:
      return { ...state, isError: action.payload };
    case ScheduleActionTypes.SET_POSTING:
      return { ...state, isPosting: action.payload };
    case ScheduleActionTypes.CHANGE_ROLE: {
      if (state.role === Role.student) {
        return { ...state, role: Role.mentor };
      } else {
        return { ...state, role: Role.student };
      }
    }
    case ScheduleActionTypes.CHANGE_TEMPLATE: {
      if (state.template === Template.calendar) {
        return { ...state, template: Template.table };
      } else {
        return { ...state, template: Template.calendar };
      }
    }
    case ScheduleActionTypes.SET_TIMEZONE:
      return { ...state, timeZone: action.payload };
    case ScheduleActionTypes.SET_EVENTS:
      return { ...state, events: action.payload };
    case ScheduleActionTypes.SET_CSV:
      return { ...state, csv: action.payload };
    default:
      return state;
  }
};
