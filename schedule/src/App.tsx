import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getScheduleAsync } from './redux/actions';
import Table from './components/table/table'

function App() {
  const dispatch = useDispatch();
  dispatch(getScheduleAsync());
  return <div className="App"><Table /></div>;
}

export default App;
