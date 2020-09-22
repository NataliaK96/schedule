export enum ScheduleActionTypes {
  __INIT__ = '@@schedule/__INIT__',
  FETCH_SCHEDULE = '@@schedule/FETCH_SCHEDULE',

  FETCH_EVENT = '@@schedule/FETCH_EVENT',
  POST_EVENT = '@@schedule/ADD_EVENT',
  DELETE_EVENT = '@@schedule/DELETE_EVENT',

  SET_MARK = '@@schedule/SET_MARK',

  SET_ROLE = '@@schedule/SET_ROLE',

  SET_TIMEZONE = '@@schedule/SET_TIMEZONE',

  CHOOSE_CALENDARE = '@@schedule/CHOOSE_CALENDARE',
  CHOOSE_TABLE = '@@schedule/CHOOSE_TABLE',

  SET_LOADING = '@@schedule/SET_LOADING',
  SET_ERROR = '@@schedule/SET_ERROR',

  SET_EVENT_INFO_IS_VISIBLE = '@@schedule/SET_EVENT_INFO_IS_VISIBLE',
  SET_EVENT_EDIT_IS_VISIBLE = '@@schedule/SET_EVENT_EDIT_IS_VISIBLE',
}

export interface ISchedule {
  isLoading: boolean
  isError: boolean
  role: Role
  template: Template
  events: IEvent[]
  chooseEvent: IEvent | null
  eventInfoIsVisible: boolean
  eventEditIsVisible: boolean
}

export enum Template {
  calendar = 'calendar',
  table = 'table',
}

export enum Role {
  mentor = 'mentor',
  student = 'student',
}

export interface IEvent {
  id: string
  name: string
  description: string
  descriptionUrl: string
  type: string
  timeZone: string
  dateTime: string
  place: string | null
  comment: string
  organizer: IOrganizer
  mark: boolean
}

export interface IOrganizer {
  name: string
  github: string
  id: string
}
