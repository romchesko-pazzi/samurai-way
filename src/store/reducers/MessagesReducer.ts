import {ACTIONS_TYPE, ProfileAndMessageActionType} from "../ProfileAndMessagesActions";
import {v1} from "uuid";
import {MessageType, UserType} from "../../components/Dialogs/DialogsContainer";

type InitType = {
    messages: Array<MessageType>
    users: Array<UserType>
    messageText: string
    isAuth: boolean
}

const initialState: InitType = {
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
    isAuth: false,
}


export const MessagesReducer = (state = initialState, action: ProfileAndMessageActionType): InitType => {
    switch (action.type) {
        case ACTIONS_TYPE.SEND_NEW_MESSAGE: {
            let x = {id: v1(), message: action.payload.newMessageText};
            return {...state, messages: [x, ...state.messages]};
        }
        default:
            return state;
    }
}