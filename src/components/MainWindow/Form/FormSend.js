import React, {useContext, useState} from 'react'
import {ChatContext} from "../../../context/chat/chatContext"
import './FormSend.css'

export default ({userId}) => {
    const {addMessages} = useContext(ChatContext)
    const [newMsgText, setNewMsgText] = useState('')

    const sendMessage = () => {
        if(newMsgText.trim().length){
            const newMessage = {
                id: Date.now()+userId,
                from: userId,
                text: newMsgText
            }
            addMessages(newMessage)

            setNewMsgText('')
        }
    }

    const keyPressTextarea = e => {
        if(e.key === 'Enter' && e.ctrlKey) {
            sendMessage()
        }
    }

    return (
        <div className='form'>
            <textarea
                className='form__textarea'
                value={newMsgText}
                onChange={ e => {setNewMsgText(e.target.value)}}
                onKeyDown={ e => {keyPressTextarea(e)}}
                autoFocus
            />
            <button
                className='form__button'
                disabled = {!newMsgText.trim().length}
                onClick = {sendMessage}>Send</button>
        </div>
    )
}