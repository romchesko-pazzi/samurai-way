export enum ACTIONS_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_POST_TEXT = "UPDATE-POST-TEXT",
    ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT",
    SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE",
}

export type GeneralMessagesType = SendNewMessageType | AddNewMessageType;

export type GeneralProfileType = AddPostType | UpdatePostTextType;

export type ActionType = AddPostType | UpdatePostTextType | SendNewMessageType | AddNewMessageType

type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST
}
type UpdatePostTextType = {
    type: ACTIONS_TYPE.UPDATE_POST_TEXT
    payload: {
        newText: string
    }
}

type SendNewMessageType = {
    type: ACTIONS_TYPE.SEND_NEW_MESSAGE
}
type AddNewMessageType = {
    type: ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT
    payload: {
        newMessageText: string
    }
}


export const addPostAC = (): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST
    }
}
export const updatePostTextAC = (newText: string): UpdatePostTextType => {
    return {
        type: ACTIONS_TYPE.UPDATE_POST_TEXT,
        payload: {newText},
    }
}
export const sendNewMessageAC = (): SendNewMessageType => {
    return {
        type: ACTIONS_TYPE.SEND_NEW_MESSAGE,
    }
}
export const addNewMessageText = (newMessageText: string): AddNewMessageType => {
    return {
        type: ACTIONS_TYPE.ADD_NEW_MESSAGE_TEXT,
        payload: {newMessageText}
    }
}