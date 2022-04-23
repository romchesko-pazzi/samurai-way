import {ACTIONS_TYPE, ActionType} from "./ProfileAndMessagesActions";
import {v1} from "uuid";
import {MessagePageType} from "../components/Messages/User/UserContainer";


const initialState: MessagePageType = {
    messageText: "",
    users: [
        {id: v1(), name: "User1"},
        {id: v1(), name: "User2"},
        {id: v1(), name: "User3"},
        {id: v1(), name: "User4"},
    ],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "chiki-briki"},
        {id: v1(), message: "lolkek"},
        {id: v1(), message: "hehehe"},
    ],

}


export const MessagesReducer = (state = initialState, action: ActionType): MessagePageType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT: {
            return {...state, messageText: action.payload.newMessageText};
        }
        case ACTIONS_TYPE.SEND_NEW_MESSAGE: {
            let x = {id: v1(), message: state.messageText};
            return {...state, messages: [x, ...state.messages], messageText: ""};
        }
        default:
            return state;
    }
}