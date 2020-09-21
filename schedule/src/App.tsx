import React from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { getScheduleAsync } from './redux/actions'
import { EventInfoModal, Header, Main } from './components'
import 'antd/dist/antd.css'

function App() {
  const dispatch = useDispatch()
  dispatch(getScheduleAsync())
  return (
    <div className="App">
      {/* <Header></Header>
      <Main></Main> */}
      <EventInfoModal />
    </div>
  )
}

export default App
