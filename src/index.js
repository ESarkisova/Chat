import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ChatState} from "./context/chat/ChatState";

ReactDOM.render(
  <React.StrictMode>
      <ChatState><App /></ChatState>
  </React.StrictMode>,
  document.getElementById('root')
)

