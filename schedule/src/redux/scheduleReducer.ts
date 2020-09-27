import {
  ScheduleActionTypes,
  ISchedule,
  Role,
  Template,
  IEvent,
} from './types';
import { initAction } from './actions';

const initialState: ISchedule = {
  isLoading: false,
  isError: false,
  isPosting: false,
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
      githubId: 'Nataliak96',
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
    case ScheduleActionTypes.SET_POSTING:
      return { ...state, isPosting: action.payload };
    // case ScheduleActionTypes.SET_EVENT: {
    //   const events = state.events.concat();
    //   const findEvent = events.findIndex(
    //     (event: IEvent) => event.id === action.payload.id
    //   );
    //   if (findEvent !== -1) {
    //     events[findEvent] = action.payload;
    //   } else {
    //     events.push(action.payload);
    //   }
    //   return { ...state, events: events };
    // }
    default:
      return state;
  }
};
