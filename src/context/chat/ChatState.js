import React, {useReducer} from 'react'
import {chatReducer} from "./chatReducer"
import {ChatContext} from "./chatContext"
import {ADD_MESSAGE} from "../types"


export const ChatState = ({children}) => {
    const initialState = {
        id: 23,
        name: 'Тестовый чат',
        usersList: [{id: 1, name: 'operator'},{id: 2, name: 'user'}],
        messageList: [{id: 5, from: 1, text: 'Hello'}, {id: 6, from: 2, text: 'HelloYou'}]
    }

    const [state, dispatch] = useReducer(chatReducer, initialState)

    const addMessage = message => {
        dispatch({type: ADD_MESSAGE, message})
    }

    const loadMessage = () => {
        console.log('load msg')
    }


    return (
        <ChatContext.Provider value={{
            addMessage, loadMessage,
            name: state.name,
            userList: state.userList,
            messageList: state.messageList
        }}>
            {children}
        </ChatContext.Provider>
    )
}