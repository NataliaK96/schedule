import { ScheduleActionTypes, ISchedule, Role, Template } from './types';
import { initAction } from './actions';

const initialState: ISchedule = {
  isLoading: false,
  isError: false,
  role: Role.student,
  events: [],
  template: Template.table,
  chooseEvent: {
    id: 'sfnnfeslf',
    name: 'Встреча у бабушки',
    description: 'Мы встречаемся у бабушки',
    descriptionUrl: 'хттп://бабушка.рф',
    type: 'deadline',
    timeZone: '-240',
    dateTime: '2020-09-14T23:59',
    place: 'Домик в деревне',
    comment: 'Не забудьте, что кушать перед поезкой нельзя',
    organizer: {
      id: 'fnisfl',
      githubId: 'Olys1703',
      name: 'зергей',
    },
    mark: false,
  },
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
    case ScheduleActionTypes.SET_EVENT_EDIT_IS_VISIBLE:
      return { ...state, eventEditIsVisible: action.payload };
    case ScheduleActionTypes.SET_EVENT_INFO_IS_VISIBLE:
      return { ...state, eventInfoIsVisible: action.payload };
    default:
      return state;
  }
};
