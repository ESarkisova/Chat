import React, {useReducer} from 'react'
import {chatReducer} from "./chatReducer"
import {ChatContext} from "./chatContext"
import {ADD_MESSAGE, LOAD_MESSAGE} from "../types"

const NAME_LS = 'MESSAGES'

export const ChatState = ({children}) => {
    const initialState = {
        id: 23,
        name: 'Тестовый чат',
        usersList: [{id: 1, name: 'operator'},{id: 2, name: 'user'}],
        messagesList: []
    }

    const [state, dispatch] = useReducer(chatReducer, initialState)

    const getMessagesFromLS = () => {
        if (window.localStorage) {
            let messagesFromLS = JSON.parse(localStorage.getItem(NAME_LS)) || []
            return messagesFromLS
        }
        return []
    }

    const addMessagesToLS = message => {
        if (window.localStorage) {
            const messagesFromLS = getMessagesFromLS()
            messagesFromLS.push(message)
            localStorage.setItem(NAME_LS, JSON.stringify(messagesFromLS))
        }
    }

    const addMessages = message => {
        addMessagesToLS(message)
        dispatch({type: ADD_MESSAGE, payload: message})
    }

    const loadMessage = () => {
        const messagesFromLS = getMessagesFromLS()
        dispatch({type: LOAD_MESSAGE, payload: messagesFromLS})
    }


    return (
        <ChatContext.Provider value={{
            addMessages, loadMessage,
            name: state.name,
            usersList: state.usersList,
            messagesList: state.messagesList
        }}>
            {children}
        </ChatContext.Provider>
    )
}