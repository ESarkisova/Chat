import {ADD_MESSAGE, LOAD_MESSAGE} from "../types"


export const chatReducer = (state, action) => {
    switch (action.type) {
        case LOAD_MESSAGE:
            return {
                ...state,
                messageList: [...action.payload, ...state.messageList]
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messageList: [...state.messageList, action.payload]
            };
        default:
            return state;
    }
}
