import {Dispatch} from "redux";
import {UserProfileType} from "../components/Profile/ProfileInfo";
import {profileAPI} from "../api/api";

export enum ACTIONS_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_POST_TEXT = "UPDATE-POST-TEXT",
    ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT",
    SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_USER_STATUS = "SET-USER-STATUS",
}

export type ActionType =
    AddPostType |
    UpdatePostTextType |
    SendNewMessageType |
    AddNewMessageType |
    SetUserProfileType |
    SetUserStatusType;

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
type SetUserStatusType = ReturnType<typeof setUserStatus>

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

const setUserProfile = (profile: UserProfileType) => {
    return {
        type: ACTIONS_TYPE.SET_USER_PROFILE,
        payload: {profile}
    } as const
}

const setUserStatus = (status: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_STATUS,
        payload: {status}
    } as const
}

export const getUserProfileTC = (userId: number) => (dispatch: Dispatch<ActionType>) => {
    userId = userId || 22904;
    profileAPI.setUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
}

export const getUserStatusTC = (userId: number) => (dispatch: Dispatch<ActionType>) => {
    userId = userId || 22904;
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setUserStatus(res))
        })
        .catch(console.log);
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}