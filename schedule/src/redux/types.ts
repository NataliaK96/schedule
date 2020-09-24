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

  SHOW_CALENDAR_EVENT = '@@schedule/SHOW_HIDE_CALENDAR_EVENT',
  SET_CALENDAR_EVENT_ID = '@@schedule/SET_CALENDAR_EVENT_ID',
}

export interface ISchedule {
  isLoading: boolean
  isError: boolean
  role: Role
  template: Template
  events: IEvent[]
  isCalendarEventShown: boolean
  calendarEventId: string
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
  githubLink: string
}
