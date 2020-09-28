import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import fileDownload from 'js-file-download';
import { useSelector } from 'react-redux';
import {
  selectEvents,
  selectCsv,
  selectTimeZone,
} from '../../../redux/selectors';
import { IEvent } from '../../../redux/types';

export const Download = () => {
  const csv = useSelector(selectCsv);
  const timeZine = useSelector(selectTimeZone);
  return (
    <Button
      type="primary"
      shape="round"
      icon={<DownloadOutlined />}
      onClick={() => {
        let csvStr = `"RSS,Schedule",${timeZine.name}\n` + csv;
        fileDownload(csvStr, 'schedule.csv');
      }}
    ></Button>
  );
};
