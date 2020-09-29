import React, { useState } from 'react';
import { Popover } from 'antd';
import {
  AudioOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  EditOutlined,
  EnvironmentOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import style from './EventInfo.module.scss';
import { TypeTag } from '..';
import { IEvent, Role } from '../../redux/types';
import { selectRole } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { EventEdit } from '../EventEdit/EventEdit';

type Props = {
  event: IEvent;
};

export const EventInfo: React.FC<Props> = (props) => {
  const event = props.event;
  const [editModalIsVisible, showEditModal] = useState<boolean>(false);
  const role: Role = useSelector(selectRole);
  const time = new Date(event ? event.dateTime : '')
    .toTimeString()
    .substr(0, 5);
  const date = new Date(event ? event.dateTime : '').toDateString();
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
        {role === Role.mentor && (
          <EditOutlined
            className={style.edit}
            onClick={() => {
              showEditModal(true);
            }}
          />
        )}
      </div>
    </>
  );
  const organizerGitHubId = event?.organizer.githubId;
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
  );

  return (
    <div>
      <Popover placement="top" title={header} content={content} trigger="click">
        <div>{props.children}</div>
      </Popover>
      {editModalIsVisible && (
        <EventEdit
          useDelete={true}
          event={event}
          isVisible={editModalIsVisible}
          onClose={() => {
            showEditModal(false);
          }}
        />
      )}
    </div>
  );
};
