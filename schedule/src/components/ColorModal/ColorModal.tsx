import { Dropdown, Input, Modal, Select, Tag } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTagTypes } from '../../redux/selectors';
import { IType } from '../../redux/types';

type Props = {};
export const ColorModal = (props: Props) => {
  const tagTypes = useSelector(selectTagTypes);
  return (
    <Modal visible={true} title="Настройте цвета по удобству:">
      <div>
        {tagTypes.map((tag) => (
          <div style={{ display: 'flex' }}>
            <Select defaultValue="Option1">
              <Select.Option value="Option1">Option1</Select.Option>
              <Select.Option value="Option2">Option2</Select.Option>
            </Select>
            <div>{tag.name}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
};
