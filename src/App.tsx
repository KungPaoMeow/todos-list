import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import TodoList from './TodoList';

function App() {

  return (
    <>
      <CssBaseline>
        <h1>Todos</h1>
      </CssBaseline>
      <TodoList></TodoList>
    </>
  )
}

export default App
