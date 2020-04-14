import React from 'react'
import MessageList from "./History/MessageList"
import FormSend from "./Form/FormSend"
import './MainWindow.css'

export default ({user, name, messagesList}) => {
    return <div className='chat__container'>
        <h3 className='chat__header'>{name} <small>{user.name}</small></h3>
        <MessageList userId = {user.id} messagesList = {messagesList}/>
        <FormSend userId = {user.id}/>
    </div>
}