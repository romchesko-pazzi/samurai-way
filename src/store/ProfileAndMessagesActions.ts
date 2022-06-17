import {Dispatch} from "redux";
import {UserProfileType} from "../components/Profile/ProfileInfo";
import {profileAPI} from "../api/api";

export enum ACTIONS_TYPE {
    ADD_POST = "ADD-POST",
    // UPDATE_POST_TEXT = "UPDATE-POST-TEXT",
    // ADD_NEW_MESSAGE_TEXT = "ADD-NEW-MESSAGE-TEXT",
    SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_USER_STATUS = "SET-USER-STATUS",
}

export type ActionType =
    AddPostType |
    SendNewMessageType |
    SetUserProfileType |
    SetUserStatusType;

type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST
    payload: {
        newPostText: string
    }
}

type SendNewMessageType = {
    type: ACTIONS_TYPE.SEND_NEW_MESSAGE
    payload: { newMessageText: string }
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUserStatusType = ReturnType<typeof setUserStatus>

export const addPostAC = (newPostText: string): AddPostType => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
        payload: {newPostText},
    }
}

export const sendNewMessageAC = (newMessageText:string): SendNewMessageType => {
    return {
        type: ACTIONS_TYPE.SEND_NEW_MESSAGE,
        payload: {newMessageText},
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