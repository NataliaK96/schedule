import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import Calendar from './components/Calendar/Calendar';

function App() {
  const dispatch = useDispatch();
  dispatch(getScheduleAsync());
  return <div className="App">
    <Calendar />
  </div>;
}

export default App;
