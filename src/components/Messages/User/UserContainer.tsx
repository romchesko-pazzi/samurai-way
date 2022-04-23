import {ChangeEvent} from 'react';
import {ActionType, addNewMessageText, sendNewMessageAC} from "../../../store/ProfileAndMessagesActions";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {RootStateType} from "../../../store/store";

export type MapDispatchToPropsType = {
    onClickHandler: () => void
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
export type MessagePageType = {
    messages: Array<MessageType>
    users: Array<UserType>
    messageText: string,
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

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType => {
    return {
        onClickHandler: () => {
            dispatch(sendNewMessageAC());
        },
        onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(addNewMessageText(event.currentTarget.value));
        }
    }
}

export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);