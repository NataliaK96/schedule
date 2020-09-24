import React from 'react'
import './Calendar.css'
import { Calendar as CalendarElement, Badge } from 'antd'
import { IEvent, ISchedule } from '../../redux/types'
import moment from 'moment'
import { connect } from 'react-redux'
import {
  selectorEvents,
  selectorEvent,
  selectorIsCalendarEventShown,
  selectorCalendarEventId,
} from '../../redux/selectors'
import EventModal from './EventModal/EventModal'
import { setCalendarEventId, showCalendarEvent } from '../../redux/actions'

interface IFormattedData {
  [key: string]: IEvent[]
}

interface IColors {
  [key: string]: string
}

const COLORS: IColors = {
  deadline: 'red',
  youtube: 'orange',
  task: 'green',
  ['YouTube Live']: 'orange',
}

const formatData = function (data: IEvent[]): IFormattedData {
  const formattedData: IFormattedData = {}

  data.forEach((dataElement) => {
    const date: string = getDateFromDateTime(dataElement.dateTime)
    if (date && formattedData[date]) {
      formattedData[date].push(dataElement)
    } else if (date) {
      formattedData[date] = [dataElement]
    }
  })

  return formattedData
}

function getDateFromDateTime(dateTime: string): string {
  const date = moment(dateTime).format('L')
  return date
}

function getDayData(time: any, formattedData: IFormattedData): IEvent[] {
  const date = time.format('L')
  return formattedData[date] || []
}

function dateCellRender(
  time: any,
  formattedData: IFormattedData,
  onEventClick: Function
) {
  const dayData = getDayData(time, formattedData)

  return (
    <ul className="events">
      {dayData.map((event, index) => {
        const type = event.type
        const name = event.name
        const id = event.id
        return (
          <li onClick={() => onEventClick(id)} key={index}>
            <Badge color={COLORS[type]} text={name} />
          </li>
        )
      })}
    </ul>
  )
}

interface Props {
  data: IEvent[]
  getEvent: Function
  isCalendarEventShown: boolean
  showCalendarEvent: Function
  setCalendarEventId: Function
  calendarEventId: string
}

const Calendar: React.FC<Props> = (props) => {
  const formattedData: IFormattedData = formatData(props.data)
  console.log(props.calendarEventId)

  const onEventClick = (id: string) => {
    props.setCalendarEventId(id)
    props.showCalendarEvent(true)
  }

  return (
    <>
      <CalendarElement
        dateCellRender={(time) =>
          dateCellRender(time, formattedData, onEventClick)
        }
      />
      <EventModal
        event={props.getEvent(props.calendarEventId)}
        isCalendarEventShown={props.isCalendarEventShown}
        showCalendarEvent={props.showCalendarEvent}
      />
    </>
  )
}

const mapStateToProps = (store: ISchedule) => {
  return {
    data: selectorEvents(store),
    getEvent: (id: string) => selectorEvent(store, id),
    isCalendarEventShown: selectorIsCalendarEventShown(store),
    calendarEventId: selectorCalendarEventId(store),
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    showCalendarEvent: (show: boolean) => dispatch(showCalendarEvent(show)),
    setCalendarEventId: (id: string) => dispatch(setCalendarEventId(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
