import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStateType} from "../../store/store";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MessagePageType = {
    messages: Array<MessageType>
    users: Array<UserType>
    messageText: string
}
export type MessageType = {
    id: string
    message: string
}
export type UserType = {
    name: string
    id: string
}

const mapStateToProps = (state: RootStateType): MessagePageType => {
    return {
        messages: state.messagePage.messages,
        users: state.messagePage.users,
        messageText: state.messagePage.messageText,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps),
    withAuthRedirect)
(Dialogs);


