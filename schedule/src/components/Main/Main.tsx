import React from 'react';
import style from './Main.module.scss';
import { Download } from './Download/Download';
import { TimeZone } from './TimeZone/TimeZone';

export const Main = (props: any) => {
  return (
    <main className={style.main}>
      <div className={style.head}>
        <TimeZone />
        <h2 className={style['name-task']}>Shedule</h2>
        <Download />
      </div>
      {props.children}
    </main>
  );
};
