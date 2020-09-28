import React, { useState, useEffect } from 'react';
import './Table.css';
import { Table as TebleAntd } from 'antd';
import { connect, useSelector, useDispatch } from 'react-redux';
import { selectEvents, selectRole } from '../../redux/selectors';
import { ISchedule, IEvent, IOrganizer, Role } from '../../redux/types';
import moment from 'moment';
import { setCsv } from '../../redux/actions';
import { EventEdit } from '../EventEdit/EventEdit';
import { TypeTag } from '..';
import { Checkbox } from 'antd';
import { Popover, Button } from 'antd';

const Table = (props: { events: IEvent[] }) => {
  const { events } = props;
  const dispath = useDispatch();
  const [editModalIsVisible, shwoEditModal] = useState<boolean>(false);
  const [chooseEvent, setChooseEvent] = useState<IEvent | undefined>(undefined);
  const role = useSelector(selectRole);
  const dataSource = events.map((eventsItem: IEvent) => {
    return {
      key: eventsItem.id,
      status: eventsItem.mark,
      date: moment(eventsItem.dateTime).format('YYYY-MM-DD'),
      time: moment(eventsItem.dateTime).format('hh:mm'),
      type: eventsItem.type,
      name: eventsItem.name,
      organizer: eventsItem.organizer,
      comment: eventsItem.comment,
      eventsItem: eventsItem,
    };
  });

  const [showDate, changeShowDate] = useState<boolean>(true);
  const [showTime, changeShowTime] = useState<boolean>(true);
  const [showType, changeShowType] = useState<boolean>(true);
  const [showName, changeShowName] = useState<boolean>(true);
  const [showOrganizer, changeShowOrganizer] = useState<boolean>(true);
  const [showComment, changeShowComment] = useState<boolean>(true);

  function onChange(checkedValues: any) {
    switch (checkedValues.target.value) {
      case 'date':
        changeShowDate(!showDate);
        break;
      case 'time':
        changeShowTime(!showTime);
        break;
      case 'type':
        changeShowType(!showType);
        break;
      case 'name':
        changeShowName(!showName);
        break;
      case 'organizer':
        changeShowOrganizer(!showOrganizer);
        break;
      case 'comment':
        changeShowComment(!showComment);
        break;
    }
  }

  const typesArray = events.map((event: IEvent) => event.type);
  const filterTypesArray = typesArray.filter(
    (item: string, index: number) => typesArray.indexOf(item) === index
  );

  const filtersArr = filterTypesArray.map((type: string) => {
    return {
      text: type,
      value: type,
    };
  });

  const dateColumn = showDate
    ? {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      }
    : {};

  const timeColumn = showTime
    ? {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
      }
    : {};

  const typeColumn = showType
    ? {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        filters: filtersArr,
        onFilter: (value: any, record: any) => record.type.indexOf(value) === 0,
        render: (type: string) => <TypeTag type={type}></TypeTag>,
      }
    : {};

  const nameColumn = showName
    ? {
        title: 'Name',
        dataIndex: 'eventsItem',
        key: 'name',
        render: (eventsItem: IEvent) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={eventsItem.descriptionUrl}
          >
            {eventsItem.name}
          </a>
        ),
      }
    : {};

  const organizerColumn = showOrganizer
    ? {
        title: 'Organizer',
        dataIndex: 'organizer',
        key: 'organizer',
        render: (organizer: IOrganizer) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${organizer.githubId}`}
          >
            {organizer.name}
          </a>
        ),
      }
    : {};

  const commentColumn = showComment
    ? {
        title: 'Comment',
        dataIndex: 'comment',
        key: 'comment',
      }
    : {};

  const columns = [
    dateColumn,
    timeColumn,
    typeColumn,
    nameColumn,
    organizerColumn,
    commentColumn,
  ];

  useEffect(() => {
    const header =
      columns.reduce((acc, item) => {
        if (item.title === '') return acc;
        return acc + item.title + ',';
      }, '') + '\n';
    const rows = dataSource.reduce((acc, item) => {
      const row =
        [
          item.date ? item.date : 'не указано',
          item.time ? item.time : 'не указано',
          item.type ? item.type : 'не указано',
          `${item.name ? item.name : 'у события нет имени'}(${
            item.eventsItem.descriptionUrl
              ? item.eventsItem.descriptionUrl
              : 'ссылка отсутствует'
          })`,
          `${item.organizer.name ? item.organizer.name : 'не указано'}(${
            item.organizer.githubId ? item.organizer.githubId : 'не указано'
          })`,
          item.comment ? item.comment : 'не указано',
        ]
          .map((i) => `"${i}"`)
          .join(',') + '\n';
      return acc + row;
    }, '');
    const csv = header + rows;
    dispath(setCsv(csv));
  });

  const rowSelection = {
    getCheckboxProps: (record: { name: string }) => ({ name: record.name }),
  };

  const content = (
    <div className="column-visability-setting">
      <Checkbox checked={showDate} onChange={onChange} value="date">
        {' '}
        Date{' '}
      </Checkbox>
      <Checkbox checked={showTime} onChange={onChange} value="time">
        {' '}
        Time{' '}
      </Checkbox>
      <Checkbox checked={showType} onChange={onChange} value="type">
        {' '}
        Type{' '}
      </Checkbox>
      <Checkbox checked={showName} onChange={onChange} value="name">
        {' '}
        Name{' '}
      </Checkbox>
      <Checkbox checked={showOrganizer} onChange={onChange} value="organizer">
        {' '}
        Organizer{' '}
      </Checkbox>
      <Checkbox checked={showComment} onChange={onChange} value="comment">
        {' '}
        Comment{' '}
      </Checkbox>
    </div>
  );

  return (
    <>
      <Popover
        content={content}
        title="Сolumn visability setting"
        trigger="click"
      >
        <Button className="column-visability-setting">
          Column visability setting
        </Button>
      </Popover>
      <TebleAntd
        style={{ marginTop: 20, overflowY: 'auto' }}
        rowSelection={{ ...rowSelection }}
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              if (role === Role.student) return;
              setChooseEvent(record.eventsItem);
              shwoEditModal(true);
              console.log(record, rowIndex, event);
            },
          };
        }}
      />

      {editModalIsVisible && chooseEvent && (
        <EventEdit
          useDelete={true}
          event={chooseEvent}
          isVisible={editModalIsVisible}
          onClose={() => {
            shwoEditModal(false);
          }}
        />
      )}
    </>
  );
};

const mapStateToProps = (store: ISchedule) => ({ events: selectEvents(store) });

export default connect(mapStateToProps)(Table);
