import {Dispatch} from "redux";
import axios from "axios";
import {UserProfileType} from "../components/Profile/ProfileInfo";

export enum ACTIONS_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_POST_TEXT = "UPDATE-POST-TEXT",
    ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT",
    SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE",
    SET_USER_PROFILE = "SET-USER-PROFILE",
}

export type ActionType = AddPostType | UpdatePostTextType | SendNewMessageType | AddNewMessageType | SetUserProfileType

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

type SetUserProfileType = ReturnType<typeof setUserProfile>

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

export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_PROFILE,
        payload: {profile}
    } as const
}

export const setUserProfileTC = (userId: number) => (dispatch: Dispatch<ActionType>) => {
    userId = userId || 22904;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        dispatch(setUserProfile(response.data));
    })
}