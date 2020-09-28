import React from 'react';
import style from './Main.module.scss';
import { Download } from './Download/Download';
import { TimeZone } from './TimeZone/TimeZone';
import { TypeSwitch } from './TypeSwitch/TypeSwitch';
import { Role } from '../../redux/types';
import { EventCreate } from '..';
import { selectRole } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Main: React.FC = (props) => {
  const role: Role = useSelector(selectRole);
  return (
    <main className={style.main}>
      <div className={style.head}>
        <div style={{ display: 'flex' }}>
          <TimeZone />
          <TypeSwitch />
        </div>
        <div style={{ display: 'flex' }}>
          {role === Role.mentor && <EventCreate />}
          <div style={{ marginLeft: 10 }}>
            <Download />
          </div>
        </div>
      </div>
      {props.children}
    </main>
  );
};
