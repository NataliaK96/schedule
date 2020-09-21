import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getScheduleAsync } from "./redux/actions";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();
  dispatch(getScheduleAsync());
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
