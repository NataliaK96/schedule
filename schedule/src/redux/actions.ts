import { ScheduleActionTypes, IEvent, ITimeZone, Role } from './types';
import { api } from '../api/api';

export const initAction = () => ({
  type: ScheduleActionTypes.__INIT__,
});

export const setLoading = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_LOADING,
    payload: value,
  };
};

export const setError = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_ERROR,
    payload: value,
  };
};

export const setPosting = (value: boolean) => {
  return {
    type: ScheduleActionTypes.SET_POSTING,
    payload: value,
  };
};

// export const setRole = (role: Role) => {
//   return {
//     type: ScheduleActionTypes.SET_ROLE,
//     payload: role,
//   };
// };

export const changeRole = () => {
  return {
    type: ScheduleActionTypes.CHANGE_ROLE,
  };
};

export const changeTemplate = () => {
  return {
    type: ScheduleActionTypes.CHANGE_TEMPLATE,
  };
};

// export const chooseTable = (value: string) => {
//   return {
//     type: ScheduleActionTypes.CHOOSE_TABLE,
//     payload: value,
//   };
// };

// export const chooseCalendar = (value: string) => {
//   return {
//     type: ScheduleActionTypes.CHOOSE_CALENDARE,
//     payload: value,
//   };
// };

export const setEvents = (events: IEvent[]) => {
  return {
    type: ScheduleActionTypes.SET_EVENTS,
    payload: events,
  };
};

export const setTimeZone = (value: ITimeZone) => {
  return {
    type: ScheduleActionTypes.SET_TIMEZONE,
    payload: value,
  };
};

export const getScheduleAsync = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  let schedule;
  try {
    schedule = await fetch(api.getUrlEvents());
    schedule = await schedule.json();
  } catch {}
  dispatch({
    type: ScheduleActionTypes.FETCH_SCHEDULE,
    payload: schedule.data,
  });
  dispatch(setLoading(false));
};

export const postEvent = (event: IEvent) => async (dispatch: any) => {
  dispatch(setPosting(true));
  try {
    await fetch(api.getUrlEvent(), {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(getScheduleAsync());
  } catch {
    dispatch(setError(true));
  }
  dispatch(setPosting(false));
};

export const putEvent = (event: IEvent) => async (dispatch: any) => {
  dispatch(setPosting(true));
  try {
    await fetch(api.getUrlEvent(event.id), {
      method: 'PUT',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(getScheduleAsync());
  } catch {
    dispatch(setError(true));
  }
  dispatch(setPosting(false));
};
