import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import 'antd/dist/antd.css';
import { Button, Spin } from 'antd';
import Calendar from './components/Calendar/Calendar';
import { selectChooseEvent, selectIsLoading } from './redux/selectors';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleAsync());
  }, []);
  const event = useSelector(selectChooseEvent);
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
