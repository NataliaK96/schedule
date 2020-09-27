import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

export const Download = () => {
  return (
    <Button type="primary" shape="round" icon={<DownloadOutlined />}>
      DOWNLOAD
    </Button>
  );
};
