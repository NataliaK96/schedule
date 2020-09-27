import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import { EventCreate, EventEdit, EventInfo } from './components';
import 'antd/dist/antd.css';
import { Button, Spin } from 'antd';
import {
  selectChooseEvent,
  selectEvents,
  selectIsLoading,
} from './redux/selectors';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleAsync());
  }, [dispatch]);
  const events = useSelector(selectEvents);
  const [isVisible, setVisible] = useState<boolean>(false);
  const showModal = () => {
    setVisible(true);
  };
  return (
    <div className="App">
      <Spin spinning={isLoading} tip="Loading..." />
      <Button type="primary" onClick={showModal}>
        Show Modal
      </Button>
      {events[0] ? (
        <EventEdit
          event={events[0]}
          isVisible={isVisible}
          onClose={() => {
            setVisible(false);
          }}
        />
      ) : undefined}
      {events[0] ? <EventInfo event={events[0]}>Pick</EventInfo> : undefined}
      <EventCreate />
    </div>
  );
}

export default App;
