import { PlusOutlined } from '@ant-design/icons';
import { Affix, Button } from 'antd';
import React, { useState } from 'react';
import { EventEdit } from '..';
import { IEvent } from '../../redux/types';

// type Props = {
//   isVisible: boolean;
//   onClose: Function;
// };
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
      <EventEdit event={emptyEvent} onClose={onClose} isVisible={isVisible} />
      <Affix style={{ position: 'fixed', right: 30, bottom: 30 }}>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          <PlusOutlined />
        </Button>
      </Affix>
    </>
  );
};
