import { IEvent, ITimeZone } from '../redux/types';

export const timeZoneReduction = (
  events: IEvent[],
  timeZone: ITimeZone
): IEvent[] => {
  return events.map((event: IEvent) => {
    let timeZoneDiff = (+event.timeZone - timeZone.offset) / 60;
    let nowTime = new Date(event.dateTime);
    nowTime.setHours(nowTime.getHours() + timeZoneDiff);
    event.timeZone = timeZone.offset.toString();
    event.dateTime = nowTime.toString();
    return event;
  });
};
