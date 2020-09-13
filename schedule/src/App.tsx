import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  dispatch(getScheduleAsync());
  return <div className="App"></div>;
}

export default App;
