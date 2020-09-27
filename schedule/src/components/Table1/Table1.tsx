import React from 'react';
import './Table.css';
import { Table as TebleAntd, Tag } from 'antd';
import { connect } from 'react-redux';
import { selectEvents } from '../../redux/selectors';
import { ISchedule, IEvent, IOrganizer } from '../../redux/types';
import moment from 'moment';

const Table = (props: { events: IEvent[] }) => {
  const { events } = props;
  console.log(events);

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

  const columns = [
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: filtersArr,
      onFilter: (value: any, record: any) => record.type.indexOf(value) === 0,
      render: (type: string) => <Tag>{type}</Tag>,
    },
    {
      title: 'Name',
      dataIndex: 'eventsItem',
      key: 'name',
      render: (eventsItem: IEvent) => (
        <a target="_blank" href={eventsItem.descriptionUrl}>
          {eventsItem.name}
        </a>
      ),
    },
    {
      title: 'Organizer',
      dataIndex: 'organizer',
      key: 'organizer',
      render: (organizer: IOrganizer) => (
        <a target="_blank" href={`https://github.com/${organizer.githubId}`}>
          {organizer.name}
        </a>
      ),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
  ];

  const rowSelection = {
    getCheckboxProps: (record: { name: string }) => ({ name: record.name }),
  };

  return (
    <TebleAntd
      style={{ marginTop: 20 }}
      rowSelection={{ ...rowSelection }}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

const mapStateToProps = (store: ISchedule) => ({ events: selectEvents(store) });

export default connect(mapStateToProps)(Table);
