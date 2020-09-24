import { ISchedule, IEvent, Role, Template } from './types'

export const selectorEvents = (store: ISchedule): IEvent[] => store.events
export const selectorRole = (store: ISchedule): Role => store.role
export const selectorTemplate = (store: ISchedule): Template => store.template
export const selectorIsError = (store: ISchedule): boolean => store.isError
export const selectorIsLoading = (store: ISchedule): boolean => store.isLoading
export const selectorEvent = (
  store: ISchedule,
  eventId: string
): IEvent | undefined => {
  return store.events.find((event: IEvent) => event.id === eventId)
}
export const selectorEventName = (
  store: ISchedule,
  eventId: string
): string | undefined => {
  const findEvent: IEvent | undefined = store.events.find(
    (event: IEvent) => event.id === eventId
  )
  return findEvent?.name
}
export const selectorEventType = (
  store: ISchedule,
  eventId: string
): string | undefined => {
  const findEvent: IEvent | undefined = store.events.find(
    (event: IEvent) => event.id === eventId
  )
  return findEvent?.type
}
export const selectorIsCalendarEventShown = (store: ISchedule) =>
  store.isCalendarEventShown
export const selectorCalendarEventId = (store: ISchedule) =>
  store.calendarEventId
