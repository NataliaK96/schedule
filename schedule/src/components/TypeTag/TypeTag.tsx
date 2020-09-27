import { Tag } from 'antd';
import React from 'react';
import { IType } from '../../redux/types';

export const types: IType[] = [
  {
    name: 'self education',
    color: 'gold',
  },
  {
    name: 'deadline',
    color: 'red',
  },
  {
    name: 'task review',
    color: 'orange',
  },
  {
    name: 'task start',
    color: 'green',
  },
  {
    name: 'online lecture',
    color: 'blue',
  },
  {
    name: 'elective',
    color: 'purple',
  },
  {
    name: 'cross check start',
    color: 'lime',
  },
  {
    name: 'test',
    color: 'magenta',
  },
];

type Props = {
  type: string;
};
export const TypeTag = (props: Props) => {
  const defType: IType = {
    name: props.type,
    color: '',
  };
  const findType = types.find((type) => type.name === props.type);
  const type = findType ? findType : defType;
  return <Tag color={type?.color}>{type?.name}</Tag>;
};
