import React from 'react';
import './Calendar.css';
import { Calendar as CalendarElement, Badge } from 'antd';
import { IEvent, ISchedule } from '../../redux/types';
import moment from 'moment';
import { connect } from 'react-redux';
import { selectEvents } from '../../redux/selectors';
import { EventInfo } from '../EventInfo/EventInfo';

interface IFormattedData {
  [key: string]: IEvent[];
}

const getColor = (type: string): string => {
  let color: string;
  switch (type) {
    case 'online':
      color = 'blue';
    case 'deadline':
      color = 'red';
    case 'js task':
      color = 'green';
    case 'test':
      color = 'purple';
    default:
      color = 'gold';
  }
  return color;
};

const formatData = function (data: IEvent[]): IFormattedData {
  const formattedData: IFormattedData = {};

  data.forEach((dataElement) => {
    const date: string = getDateFromDateTime(dataElement.dateTime);
    if (date && formattedData[date]) {
      formattedData[date].push(dataElement);
    } else if (date) {
      formattedData[date] = [dataElement];
    }
  });

  return formattedData;
};

function getDateFromDateTime(dateTime: string): string {
  const date = moment(dateTime).format('L');
  return date;
}

function getDayData(time: any, formattedData: IFormattedData): IEvent[] {
  const date = time.format('L');
  return formattedData[date] || [];
}

function dateCellRender(time: any, formattedData: IFormattedData) {
  const dayData = getDayData(time, formattedData);

  return (
    <ul className="events">
      {dayData.map((event, index) => {
        const type = event.type;
        const name = event.name;
        return (
          <li key={index}>
            <EventInfo event={event}>
              <Badge color={getColor(type)} text={name} />
            </EventInfo>
          </li>
        );
      })}
    </ul>
  );
}

interface Props {
  data: IEvent[];
}

const Calendar: React.FC<Props> = (props) => {
  const formattedData: IFormattedData = formatData(props.data);

  return (
    <>
      <CalendarElement
        dateCellRender={(time) => dateCellRender(time, formattedData)}
      />
    </>
  );
};

const mapStateToProps = (store: ISchedule) => {
  return {
    data: selectEvents(store),
  };
};

export default connect(mapStateToProps)(Calendar);
