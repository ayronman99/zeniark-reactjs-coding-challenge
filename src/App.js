import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<Quiz />} path="/quiz" />
          <Route element={<Result />} path="/result" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
