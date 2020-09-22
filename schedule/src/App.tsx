import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getScheduleAsync } from './redux/actions'
import { EventInfo, Header, Main } from './components'
import 'antd/dist/antd.css'
import { Button, Spin } from 'antd'
import { selectIsLoading } from './redux/selectors'

function App() {
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getScheduleAsync())
  }, [])
  return (
    <div className="App">
      <Spin spinning={isLoading} tip="Loading..." />
      {/* <Header></Header>
      <Main></Main> */}
      <EventInfo>Pick</EventInfo>
    </div>
  )
}

export default App
