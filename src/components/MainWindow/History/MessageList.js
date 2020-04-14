import React from 'react'
import Message from "./Message"
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'

export default ({userId, messagesList}) => {
    return (
        <ScrollToBottom className='message__container'>
            <div className='message__container-inner'>
                { messagesList.map( message => <Message
                    key = {message.id}
                    message={message}
                    userId = {userId}/>)
                }
            </div>
        </ScrollToBottom>
    )
}