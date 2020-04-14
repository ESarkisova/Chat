import {ADD_MESSAGE, LOAD_MESSAGE} from "../types"


export const chatReducer = (state, action) => {
    switch (action.type) {
        case LOAD_MESSAGE:
            return {
                ...state,
                messagesList: [...action.payload, ...state.messagesList]
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messagesList: [...state.messagesList, action.payload]
            };
        default:
            return state;
    }
}
