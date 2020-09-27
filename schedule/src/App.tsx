import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import {
  selectEvents,
  selectIsLoading,
  selectTemplate,
} from './redux/selectors';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import 'antd/dist/antd.css';
import Calendar from './components/Calendar/Calendar';
import { Role, Template } from './redux/types';
import Table from './components/Table/Table';

function App() {
  const template = useSelector(selectTemplate);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleAsync());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Main>{template === Template.calendar ? <Calendar /> : <Table />}</Main>
      {isLoading && (
        <div className="spinner-wrapper">
          <Spin spinning={true} tip="Loading..." />
        </div>
      )}
    </div>
  );
}

export default App;
