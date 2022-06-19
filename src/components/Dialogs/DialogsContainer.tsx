import React from 'react';
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {sendNewMessageAC} from "../../store/ProfileAndMessagesActions";
import {MessageType, UserType} from "../../store/reducers/MessagesReducer";

export type MessagePageType = {
    messages: Array<MessageType>
    users: Array<UserType>
}


const DialogsContainer = () => {

    const dispatch = useAppDispatch();
    const {messages, users} = useAppSelector(state => state.messagePage)
    const addMessage = (newMessageText: string) => {
        dispatch(sendNewMessageAC(newMessageText));
    }

    return <Dialogs messages={messages} users={users} sendMessage={addMessage}/>
}


export default withAuthRedirect(DialogsContainer);