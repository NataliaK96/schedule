import React from 'react';
import './Calendar.css';
import { Calendar as CalendarElement, Badge } from 'antd';
import { IEvent, ISchedule, IType } from '../../redux/types';
import moment from 'moment';
import { connect, useSelector } from 'react-redux';
import { selectEvents, selectTagTypes } from '../../redux/selectors';
import { EventInfo } from '../EventInfo/EventInfo';

interface IFormattedData {
  [key: string]: IEvent[];
}

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

function dateCellRender(
  time: any,
  formattedData: IFormattedData,
  tagTypes: IType[]
) {
  const dayData = getDayData(time, formattedData);
  const getColor = (type: string) => {
    const color = tagTypes.find((tag: IType) => tag.name === type)?.color;
    return color ? color : 'gold';
  };
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
  const tagTypes = useSelector(selectTagTypes);
  return (
    <>
      <CalendarElement
        dateCellRender={(time) => dateCellRender(time, formattedData, tagTypes)}
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
