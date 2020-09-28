export enum ScheduleActionTypes {
  __INIT__ = '@@schedule/__INIT__',
  FETCH_SCHEDULE = '@@schedule/FETCH_SCHEDULE',

  FETCH_EVENT = '@@schedule/FETCH_EVENT',
  POST_EVENT = '@@schedule/POST_EVENT',
  DELETE_EVENT = '@@schedule/DELETE_EVENT',
  PUT_EVENT = '@@schedule/PUT_EVENT',

  SET_MARK = '@@schedule/SET_MARK',

  CHANGE_ROLE = '@@schedule/CHANGE_ROLE',
  GET_ROLE = '@@schedule/GET_ROLE',

  SET_TIMEZONE = '@@schedule/SET_TIMEZONE',

  CHANGE_TEMPLATE = '@@schedule/CHANGE_TEMPLATE',

  SET_LOADING = '@@schedule/SET_LOADING',
  SET_ERROR = '@@schedule/SET_ERROR',

  SET_EVENT = '@@schedule/SET_EVENT',

  SET_POSTING = '@@schedule/SET_POSTING',
  SET_EVENTS = '@@schedule/SET_EVENTS',

  SET_CSV = '@@schedule/SET_CSV',
}

export interface ISchedule {
  isLoading: boolean;
  isError: boolean;
  role: Role;
  template: Template;
  events: IEvent[];
  timeZone: ITimeZone;
}

export interface ISchedule {
  isLoading: boolean;
  isError: boolean;
  isPosting: boolean;
  role: Role;
  template: Template;
  events: IEvent[];
  csv: string;
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
  id: string;
  name: string;
  description: string;
  descriptionUrl: string;
  type: string;
  timeZone: string;
  dateTime: string;
  place: string | null;
  comment: string;
  organizer: IOrganizer;
  mark: boolean;
}

export interface IOrganizer {
  name: string;
  githubId: string;
  id: string;
}

export interface IType {
  name: string;
  color: string;
}
export interface ITimeZone {
  name: string;
  offset: number;
}
