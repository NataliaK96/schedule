import React, { useState } from 'react'
import { Popover, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectChooseEvent,
  selectEventInfoIsVisible,
} from '../../redux/selectors'
import { setEventInfoIsVisible } from '../../redux/actions'

type Props = {}

export const EventInfo: React.FC<Props> = (props) => {
  const isVisible = useSelector(selectEventInfoIsVisible)
  const event = useSelector(selectChooseEvent)
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

  const title = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h6>{event?.name}</h6>
      <Button>
        <EditOutlined />
      </Button>
    </div>
  )

  const content = <div></div>

  return (
    <div style={{ position: 'absolute', top: '200px' }}>
      <Popover placement="top" title={title} content={content} trigger="click">
        <Button>{props.children}</Button>
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
