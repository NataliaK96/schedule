import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import { EventInfo, Header, Main } from './components';
import 'antd/dist/antd.css';
import { Button, Spin } from 'antd';
import { selectChooseEvent, selectIsLoading } from './redux/selectors';
import useSelection from 'antd/lib/table/hooks/useSelection';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleAsync());
  }, []);
  const event = useSelector(selectChooseEvent);
  return (
    <div className="App">
      <Spin spinning={isLoading} tip="Loading..." />
      {/* <Header></Header>
      <Main></Main> */}
      {event ? <EventInfo event={event}>Pick</EventInfo> : undefined}
    </div>
  );
}

export default App;
