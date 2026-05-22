import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Read from './components/Read/Read'
import Update from './components/Update/Update'
import Delete from './components/Delete/Delete'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/criar' element={<Create/>}/>
            <Route path='/ler/:id' element={<Read/>}/>
            <Route path='/alterar'element={<Update/>}/>
            <Route path='apagar' element={<Delete/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
