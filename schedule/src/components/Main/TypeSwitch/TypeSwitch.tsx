import { CalendarOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTemplate } from '../../../redux/actions';
import { selectTemplate } from '../../../redux/selectors';
import { Template } from '../../../redux/types';
import style from './TypeSwitch.module.scss';

export const TypeSwitch = () => {
  const dispatch = useDispatch();
  let icon = undefined;
  const type = useSelector(selectTemplate);
  if (type === Template.calendar) {
    icon = <DatabaseOutlined />;
  }
  if (type === Template.table) {
    icon = <CalendarOutlined />;
  }
  return (
    <div className={style.wrapper}>
      <Button
        onClick={() => {
          dispatch(changeTemplate());
        }}
      >
        {icon}
      </Button>
    </div>
  );
};
