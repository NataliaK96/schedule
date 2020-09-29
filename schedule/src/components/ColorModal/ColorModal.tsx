import { ArrowRightOutlined } from '@ant-design/icons';
import { Dropdown, Input, Menu, Modal, Select, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTagTypes } from '../../redux/actions';
import { selectTagTypes } from '../../redux/selectors';
import { IType } from '../../redux/types';
import { TypeTag } from '../TypeTag/TypeTag';

const colors = [
  'gold',
  'red',
  'orange',
  'green',
  'blue',
  'purple',
  'lime',
  'magenta',
];
type Props = {
  onClose: Function;
};
export const ColorModal = (props: Props) => {
  const tagTypes = useSelector(selectTagTypes);
  const [tags, setTags] = useState<IType[]>(tagTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    setTags(tagTypes);
  }, [tagTypes]);

  const selectHandle = (name: string, color: string) => {
    const newTags = tags.map((tag) => {
      if (tag.name === name) {
        return { ...tag, color: color };
      } else {
        return { ...tag };
      }
    });
    setTags(newTags);
  };

  const okHandler = () => {
    dispatch(setTagTypes(tags));
    localStorage.setItem('tags', JSON.stringify(tags));
    props.onClose();
  };

  const dropList = (name: string) => (
    <Menu>
      {colors.map((color, i) => (
        <Menu.Item
          key={i}
          onClick={() => {
            selectHandle(name, color);
          }}
        >
          <Tag color={color}>{name}</Tag>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Modal
      onOk={okHandler}
      onCancel={() => {
        props.onClose();
      }}
      visible={true}
      title="Настройте цвета по удобству:"
    >
      <div style={{ margin: 'auto', maxWidth: 390 }}>
        {tags.map((tag, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              padding: 2,
            }}
          >
            <TypeTag type={tag.name} />
            <ArrowRightOutlined style={{ padding: 5 }} />
            <Dropdown overlay={dropList(tag.name)}>
              <Tag color={tag.color}>{tag.name}</Tag>
            </Dropdown>
          </div>
        ))}
      </div>
    </Modal>
  );
};
