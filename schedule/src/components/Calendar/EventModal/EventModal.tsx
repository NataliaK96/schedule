import React from 'react'
import { IEvent } from '../../../redux/types'
import { Modal, Tag } from 'antd'
import moment from 'moment'
import './EventModal.css'

interface Props {
  showCalendarEvent: Function
  isCalendarEventShown: boolean
  event: IEvent
}

const EventModal: React.FC<Props> = (props) => {
  const isCalendarEventShown = props.isCalendarEventShown
  return (
    <Modal
      className="calendar__event-modal event-modal"
      visible={isCalendarEventShown}
      onCancel={() => {
        props.showCalendarEvent(false)
      }}
      title={props.event?.name}
      footer={null}
    >
      <p>
        <span className="event-modal__text">Тип: </span>
        <Tag>{props.event?.type}</Tag>
      </p>
      <p>
        <span className="event-modal__text">Время: </span>
        {moment(props.event?.dateTime).format('kk:mm')}
      </p>
      <p>
        <span className="event-modal__text">Задача: </span>
        {props.event?.comment}
      </p>
      <a href={props.event?.descriptionUrl}>Ссылка</a>
    </Modal>
  )
}

export default EventModal
