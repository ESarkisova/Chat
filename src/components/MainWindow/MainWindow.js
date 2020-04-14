import React from 'react'
import MessageList from "./History/MessageList";
import FormSend from "./Form/FormSend";

export default props => {
    return <>
        <h1>Chat Name</h1>
        <MessageList/>
        <FormSend/>
    </>
}