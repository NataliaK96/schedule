import React from 'react';
import style from './Main.module.scss';
import { Download } from './Download/Download';
import { TimeZone } from './TimeZone/TimeZone';
import { TypeSwitch } from './TypeSwitch/TypeSwitch';

export const Main: React.FC = (props) => {
  return (
    <main className={style.main}>
      <div className={style.head}>
        <div style={{ display: 'flex' }}>
          <TimeZone />
          <TypeSwitch />
        </div>
        <h2 className={style['name-task']}>Shedule</h2>
        <Download />
      </div>
      {props.children}
    </main>
  );
};
