import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';
import {connect} from 'react-redux';
import {selectorEvents} from '../../redux/selectors'; 
import {ISchedule, IEvent} from '../../redux/types';

const TableComponent = (props: { events: IEvent[] }) => {
  
  const {events} = props;
  console.log(events);

  const dataSource = events.map((eventsItem: IEvent) => {
  return {
    key: eventsItem.id,
    status: eventsItem.mark,
    date: eventsItem.dateTime.slice(0, 10),
    time: eventsItem.dateTime.slice(11, 16),
    type: eventsItem.type,
    name: eventsItem.name,
    organizer: eventsItem.organizer,
    comment: eventsItem.comment,
    eventsItem: eventsItem
    }
  });

  const typesArray = events.map((event: IEvent) => event.type);
  const filterTypesArray = typesArray.filter((item: string, index: number) => typesArray.indexOf(item) === index)


  const filtersArr = filterTypesArray.map((type: string) => {
    return {
      text: type,
      value: type,
    }
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
      render: (eventsItem: IEvent) => <a href={eventsItem.descriptionUrl}>{eventsItem.name}</a>,
    },
    {
      title: 'Organizer',
      dataIndex: 'organizer',
      key: 'organizer',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
  ];

  const rowSelection = {
    getCheckboxProps: (record: { name: string }) => (
      {name: record.name}
    ),
  };
  
  return (
      <Table 
        rowSelection={{...rowSelection}}
        dataSource={dataSource}
        columns={columns} 
      />
  )
}

const mapStateToProps = (store: ISchedule)=>({events: selectorEvents(store)})

export default connect(mapStateToProps)(TableComponent);