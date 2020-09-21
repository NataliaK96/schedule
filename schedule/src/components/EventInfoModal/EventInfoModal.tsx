import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectChooseEvent,
  selectEventInfoModalIsVisible,
} from '../../redux/selectors'
import { setEventInfoModalIsVisible } from '../../redux/actions'

export const EventInfoModal = () => {
  const isVisible = useSelector(selectEventInfoModalIsVisible)
  const event = useSelector(selectChooseEvent)
  const dispatch = useDispatch()

  const showModal = () => {
    dispatch(setEventInfoModalIsVisible(true))
  }

  const handleOk = () => {
    dispatch(setEventInfoModalIsVisible(false))
  }

  const handleCancel = () => {
    dispatch(setEventInfoModalIsVisible(false))
  }

  return (
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
  )
}
