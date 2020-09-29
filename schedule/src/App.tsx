import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getScheduleAsync, setTagTypes } from './redux/actions';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { selectIsLoading, selectTemplate } from './redux/selectors';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import 'antd/dist/antd.css';
import Calendar from './components/Calendar/Calendar';
import { Template } from './redux/types';
import Table from './components/Table/Table';

function App() {
  const template = useSelector(selectTemplate);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleAsync());
    let tags: any = localStorage.getItem('tags');
    if (!!tags) {
      tags = JSON.parse(tags);
      dispatch(setTagTypes(tags));
    }
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
