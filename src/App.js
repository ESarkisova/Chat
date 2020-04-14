import React, {useContext, useEffect} from 'react'
import MainWindow from "./components/MainWindow/MainWindow"
import {ChatContext} from "./context/chat/chatContext"
import './App.css'

function App() {
    const {name, usersList, messagesList, loadMessage} = useContext(ChatContext)
    useEffect(() => {
        loadMessage()
    }, [])

  return (
        <div className="container">
            {usersList.map( user => <MainWindow
                key = {user.id}
                name = {name}
                user= {user}
                messagesList={messagesList}/> )
            }
        </div>
  )
}

export default App
