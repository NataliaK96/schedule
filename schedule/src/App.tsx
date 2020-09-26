import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import Header from './components/Header';
import { Main } from './components/Main/Main';
import 'antd/dist/antd.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getScheduleAsync());
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
