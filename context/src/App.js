import React, { useRef, useState } from 'react'
import Employee from './Employee'
import './App.css';
import { Header } from './components/Header';
import Register from './components/Register';
import { Footer } from './components/Footer';

import {
  BroswerRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light')
  const inputRef = useRef()

  const applyTheme = () => {
      setTheme(inputRef.current.value)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{theme, employeeData: {add1: 'Abc', add2: 123567, city: 'Delhi'}}}>
        <Header></Header>
        <Register></Register>
      <input type='text' ref={inputRef}></input>
        <button onClick={() => applyTheme()}>Apply</button>
        <Employee />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
