import React from 'react'
import Health from './components/Health'
import Chatbot from './components/Chatbot'
import './index.css'
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Health/>
    </ThemeProvider>
  )
}

export default App
