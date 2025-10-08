import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header';
import MainPage from './pages/MainPage';

function App() {

  return (
    <div>
      <Header/>
      <MainPage/>
    </div>
  )
}

export default App
