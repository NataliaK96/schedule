import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Checkbox } from 'antd';
import {connect} from 'react-redux';
import {selectorEvents} from '../../redux/selectors'; 
import {ISchedule} from '../../redux/types';
import events from './mock';

const dataSource = events.map(eventsItem => {
  return {
    key: eventsItem.id,
    status: 'check',
    date: eventsItem.dateTime,
    time: eventsItem.dateTime,
    type: eventsItem.type,
    name: eventsItem.name,
    organizer: 'Evan Florens',
    comment: eventsItem.comment
  }
});

const typesArray = events.map((event) => event.type);
const filterTypesArray = typesArray.filter((item, index) => typesArray.indexOf(item) === index)

const filtersArr = filterTypesArray.map(type => {
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
    render: () => <Checkbox></Checkbox>
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
    dataIndex: 'name',
    key: 'name',
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

const TableComponent = () => {
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

const mapStateToProps = (store: ISchedule)=>({events: selectorEvents(store)})

export default connect(mapStateToProps)(TableComponent);