import { ISchedule, IEvent, Role, Template } from './types'

export const selectEvents = (store: ISchedule): IEvent[] => store.events
export const selectRole = (store: ISchedule): Role => store.role
export const selectTemplate = (store: ISchedule): Template => store.template
export const selectIsError = (store: ISchedule): boolean => store.isError
export const selectIsLoading = (store: ISchedule): boolean => store.isLoading
export const selectEvent = (
  store: ISchedule,
  eventId: string
): IEvent | undefined => {
  return store.events.find((event: IEvent) => event.id === eventId)
}
export const selectEventName = (
  store: ISchedule,
  eventId: string
): string | undefined => {
  const findEvent: IEvent | undefined = store.events.find(
    (event: IEvent) => event.id === eventId
  )
  return findEvent?.name
}
export const selectEventType = (
  store: ISchedule,
  eventId: string
): string | undefined => {
  const findEvent: IEvent | undefined = store.events.find(
    (event: IEvent) => event.id === eventId
  )
  return findEvent?.type
}
export const selectChooseEvent = (store: ISchedule): IEvent | null => {
  return store.chooseEvent
}
export const selectEventInfoIsVisible = (store: ISchedule): boolean => {
  return store.eventInfoIsVisible
}
export const selectEventEditIsVisible = (store: ISchedule): boolean => {
  return store.eventEditIsVisible
}
