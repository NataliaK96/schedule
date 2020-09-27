import { Tag } from 'antd';
import React from 'react';

type Props = {
  type: string;
};

export const TypeTag = (props: Props) => {
  let tagColor: string = 'gold';
  switch (props.type) {
    case 'online':
      {
        tagColor = 'blue';
      }
      break;
    case 'deadline':
      {
        tagColor = 'red';
      }
      break;
    case 'js task':
      {
        tagColor = 'green';
      }
      break;
    case 'test':
      {
        tagColor = 'purple';
      }
      break;
  }
  return <Tag color={tagColor}>{props.type}</Tag>;
};
