import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEvents, setTimeZone } from '../../../redux/actions';
import { selectEvents, selectTimeZone } from '../../../redux/selectors';
import { ITimeZone } from '../../../redux/types';
import { timeZoneReduction } from '../../../utils/timeZoneReduction';
import style from './TimeZone.module.scss';

const timeZones: ITimeZone[] = [
  { name: 'Europe/Minsk', offset: -180 },
  { name: 'Europe/London', offset: -60 },
  { name: 'Europe/Warsaw', offset: -120 },
  { name: 'Europe/Kiev', offset: -180 },
  { name: 'Europe/Moscow', offset: -180 },
  { name: 'Europe/Volgograd', offset: -240 },
  { name: 'Europe/Yekaterinburg', offset: -300 },
  { name: 'Asia/Tashkent', offset: -300 },
  { name: 'Asia/Tbilisi', offset: -240 },
];

export const TimeZone = () => {
  let events = useSelector(selectEvents);
  useEffect(() => {
    const data = new Date();
    const offset = data.getTimezoneOffset();
    const localTimeZone = timeZones.find(
      (timezone: ITimeZone) => timezone.offset === offset
    );
    const timeZone = localTimeZone ? localTimeZone : timeZones[0];
    dispatch(setTimeZone(timeZone));
    events = timeZoneReduction(events, timeZone);
    dispatch(setEvents(events));
  }, []);
  const timeZone = useSelector(selectTimeZone);

  const dispatch = useDispatch();
  const chooseHandle = (item: ITimeZone) => {
    dispatch(setTimeZone(item));
    events = timeZoneReduction(events, item);
    dispatch(setEvents(events));
  };
  const menu = (
    <Menu>
      {timeZones.map((item, index) => (
        <Menu.Item
          onClick={() => {
            chooseHandle(item);
          }}
          key={index}
        >
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button className={style.button}>
        {timeZone.name} <DownOutlined />
      </Button>
    </Dropdown>
  );
};
