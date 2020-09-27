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
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import 'antd/dist/antd.css';
import Calendar from './components/Calendar/Calendar';

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
      <Header></Header>
      <Main>
        <div style={{ display: 'flex' }}>
          <Calendar />
        </div>
      </Main>
      {isLoading && (
        <div className="spinner-wrapper">
          <Spin spinning={true} tip="Loading..." />
        </div>
      )}
      {/* {event ? <EventInfo event={event}>Pick</EventInfo> : undefined} */}
    </div>
  );
}

export default App;
