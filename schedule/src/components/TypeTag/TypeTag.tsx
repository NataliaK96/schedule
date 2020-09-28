import { Tag } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTagTypes } from '../../redux/selectors';
import { IType } from '../../redux/types';

type Props = {
  type: string;
};
export const TypeTag = (props: Props) => {
  const types = useSelector(selectTagTypes);
  const defType: IType = {
    name: props.type,
    color: '',
  };
  const findType = types.find((type) => type.name === props.type);
  const type = findType ? findType : defType;
  return <Tag color={type?.color}>{type?.name}</Tag>;
};
