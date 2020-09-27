import React, { useState } from 'react'
import { Popover, Button, Tag, Image } from 'antd'
import {
  AudioOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  EditOutlined,
  EnvironmentOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectChooseEvent,
  selectEventInfoIsVisible,
} from '../../redux/selectors'
import { setEventInfoIsVisible } from '../../redux/actions'
import style from './EventInfo.module.scss'
import { TypeTag } from '..'
import { IEvent } from '../../redux/types'

type Props = {
  event: IEvent
}

export const EventInfo: React.FC<Props> = (props) => {
  console.log(props.event)
  const isVisible = useSelector(selectEventInfoIsVisible)
  const event = props.event
  const dispatch = useDispatch()

  const showModal = () => {
    dispatch(setEventInfoIsVisible(true))
  }

  const handleOk = () => {
    dispatch(setEventInfoIsVisible(false))
  }

  const handleCancel = () => {
    dispatch(setEventInfoIsVisible(false))
  }
  const time = new Date(event ? event.dateTime : '').toTimeString().substr(0, 5)
  const date = new Date(event ? event.dateTime : '').toDateString()
  const header = (
    <>
      <div className={style.header}>
        <div className={style['title-wrapper']}>
          <h6 className={style.title}>{event?.name}</h6>
          <p className={style.subtitle}>{event?.description}</p>
          <div style={{ paddingTop: 4 }}>
            <TypeTag type={event?.type ? event.type : ''} />
          </div>
        </div>
        <EditOutlined style={{ paddingTop: 7 }} />
      </div>
    </>
  )
  const organizerGitHubId = event?.organizer.githubId
  const content = (
    <div>
      <div className={style.row}>
        <CalendarOutlined />
        <p className={style.date}>{date}</p>
      </div>
      <div className={style.row}>
        <ClockCircleOutlined />
        <p className={style.time}>{time}</p>
      </div>
      <div className={style.row}>
        <EnvironmentOutlined />
        {event?.descriptionUrl ? (
          <a className={style.link} href={event?.descriptionUrl}>
            {event?.place}
          </a>
        ) : (
          <p className={style.place}>{event?.place}</p>
        )}
      </div>
      <div className={style.row}>
        <AudioOutlined />
        <a
          className={style.organizer}
          href={`https://github.com/${organizerGitHubId}`}
        >
          {organizerGitHubId}
        </a>
      </div>
      <div className={style.row} style={{ alignItems: 'flex-start' }}>
        <UnorderedListOutlined style={{ paddingTop: 8 }} />
        <p className={style.comment}>{event?.comment}</p>
      </div>
    </div>
  )

  return (
    <div>
      <Popover placement="top" title={header} content={content} trigger="click">
        <div>{props.children}</div>
      </Popover>
    </div>
  )
}
/*
<>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        visible={isVisible}
        title={event?.name}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          // <Button key="back" onClick={handleCancel}>
          //   Return
          // </Button>,
          <Button
            key="submit"
            type="primary"
            // loading={loading}
            onClick={handleOk}
          >
            OK
          </Button>,
        ]}
      >
        <div>
          <p>Дата и время:</p>
          <p>{event?.dateTime}</p>
        </div>
        <div>
          <p>Комментарий:</p>
          <p>{event?.comment}</p>
        </div>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
*/
