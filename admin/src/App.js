import React from 'react'

import Nav from './Component/Nav'
import Contact from './Component/Contact'
import Reg from './Component/Reg'
import Log from './Component/Log'
import {Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>

      <Nav/>
      <Routes>
         <Route path='/Contact'element={<Contact/>}></Route>
        <Route path='/Reg' element={<Reg/>}></Route>
        <Route path='/log'element={<Log/>}></Route>
        
      </Routes>
    </div>
  )
}

export default App
