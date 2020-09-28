import React, { useState } from 'react';
import {
  Modal,
  Button,
  Input,
  Dropdown,
  Menu,
  DatePicker,
  TimePicker,
} from 'antd';
import moment from 'moment';
import { IEvent, IType } from '../../redux/types';
import style from './EventEdit.module.scss';
import { TypeTag } from '..';
import { DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { types } from '../TypeTag/TypeTag';
import TextArea from 'antd/lib/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, postEvent, putEvent } from '../../redux/actions';
import { selectEvents } from '../../redux/selectors';

type Props = {
  event: IEvent;
  isVisible: boolean;
  onClose: Function;
  useDelete: boolean;
};
export const EventEdit = (props: Props) => {
  const [editEvent, setEditEvent] = useState<IEvent>(props.event);
  const events = useSelector(selectEvents);
  const dispatch = useDispatch();
  const handleOk = () => {
    const findEvent = events.find((e: IEvent) => e.id === editEvent.id);
    if (findEvent) {
      dispatch(putEvent(editEvent));
    } else {
      dispatch(postEvent(editEvent));
    }
    props.onClose();
  };
  const handleCancel = () => {
    props.onClose();
  };
  const { confirm } = Modal;
  const handleDelete = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: <div>Событие будет удалено! Вы уверены?</div>,
      onOk() {
        dispatch(deleteEvent(props.event));
        props.onClose();
      },
    });
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setEditEvent((event: IEvent) => ({
      ...event,
      [e.target.id]: e.target.value,
    }));
  };
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.persist();
    setEditEvent((event: IEvent) => ({
      ...event,
      [e.target.id]: e.target.value,
    }));
  };
  const changeType = (type: IType) => {
    setEditEvent((event) => ({ ...event, type: type.name }));
  };
  const changeDateTime = (date: moment.Moment | null) => {
    date &&
      setEditEvent((event: IEvent) => ({
        ...event,
        dateTime: date.toString(),
      }));
  };
  const changeOrgnizerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setEditEvent((event: IEvent) => ({
      ...event,
      organizer: { ...event.organizer, name: e.target.value },
    }));
  };
  const changeOrgnizerGitHubId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setEditEvent((event: IEvent) => ({
      ...event,
      organizer: { ...event.organizer, githubId: e.target.value },
    }));
  };
  const typeMenu = (
    <Menu>
      {types.map((type: IType, index) => (
        <Menu.Item
          key={index}
          onClick={() => {
            changeType(type);
          }}
        >
          <TypeTag type={type.name} />
        </Menu.Item>
      ))}
    </Menu>
  );
  const title = (
    <>
      <div className={style.header}>
        <div className={style['title-wrapper']}>
          <div className={style.title}>Выберите настройки события:</div>
        </div>
      </div>
    </>
  );
  const content = (
    <>
      <div className={style.row}>
        <div className={style['settings-name']}>Заголовок:</div>
        <Input id="name" value={editEvent.name} onChange={handleInput} />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Подзаголовок:</div>
        <Input
          id="description"
          value={editEvent.description}
          onChange={handleInput}
        />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Тип:</div>
        <Dropdown overlay={typeMenu}>
          <Button>
            <TypeTag type={editEvent.type} /> <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Дата:</div>
        <DatePicker
          value={moment(editEvent.dateTime)}
          onChange={changeDateTime}
        />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Время:</div>
        <TimePicker
          value={moment(editEvent.dateTime)}
          onChange={changeDateTime}
        />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Название места:</div>
        <Input
          id="place"
          value={editEvent.place ? editEvent.place : ''}
          onChange={handleInput}
        />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Ссылка на место:</div>
        <Input
          id="descriptionUrl"
          value={editEvent.descriptionUrl}
          onChange={handleInput}
        />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>Имя организатора:</div>
        <Input value={editEvent.organizer.name} onChange={changeOrgnizerName} />
      </div>
      <div className={style.row}>
        <div className={style['settings-name']}>GitHub-name организатора:</div>
        <Input
          value={editEvent.organizer.githubId}
          onChange={changeOrgnizerGitHubId}
        />
      </div>
      <div className={style.row}>
        <TextArea
          id="comment"
          value={editEvent.comment}
          onChange={handleTextArea}
          placeholder="Введите комментарий..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </div>
    </>
  );
  const footerWithDelete = (
    <div className={style.footer}>
      <Button danger type="primary" onClick={handleDelete}>
        Delete
      </Button>
      <Button type="primary" onClick={handleOk}>
        OK
      </Button>
    </div>
  );
  return (
    <Modal
      className="edit-modal"
      title={title}
      visible={props.isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={props.useDelete ? footerWithDelete : undefined}
    >
      <div>{content}</div>
    </Modal>
  );
};
