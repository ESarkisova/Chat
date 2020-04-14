import React from 'react'

export default ({userId, message}) => {
    return (
        <div className={message.from === userId ? 'message message_from' : 'message message_to'}>
            <div className = 'message__inner'>
                {message.text}
            </div>
        </div>
    )
}