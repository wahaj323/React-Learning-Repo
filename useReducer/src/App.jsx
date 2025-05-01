import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Todo from './components/todo'

function App() {

  return (
    <>
      <h1 className='text-center text-3xl my-10'>useReducer</h1>
      <Todo/>
    </>
  )
}

export default App
