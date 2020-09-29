import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import { EventEdit } from '..';
import { IEvent } from '../../redux/types';

export const EventCreate = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const onClose = () => {
    setVisible(false);
  };
  const emptyEvent: IEvent = {
    name: '',
    dateTime: new Date().toString(),
    descriptionUrl: '',
    description: '',
    comment: '',
    id: '',
    type: '',
    timeZone: '',
    organizer: {
      name: '',
      id: '',
      githubId: '',
    },
    place: '',
    mark: false,
  };
  return (
    <>
      <EventEdit
        useDelete={false}
        event={emptyEvent}
        onClose={onClose}
        isVisible={isVisible}
      />
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusOutlined />
      </Button>
    </>
  );
};
