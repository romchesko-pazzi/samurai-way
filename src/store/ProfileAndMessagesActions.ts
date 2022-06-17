import {UserProfileType} from "../components/Profile/ProfileInfo";
import {profileAPI} from "../api/api";
import {AppThunkType} from "./reducers/hooks";

export enum ACTIONS_TYPE {
    ADD_POST = "ADD-POST",
    SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_USER_STATUS = "SET-USER-STATUS",
}

export type ProfileAndMessageActionType =
    AddPostType |
    SendNewMessageType |
    SetUserProfileType |
    SetUserStatusType;

type AddPostType = ReturnType<typeof addPostAC>
type SendNewMessageType = ReturnType<typeof sendNewMessageAC>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUserStatusType = ReturnType<typeof setUserStatus>

export const addPostAC = (newPostText: string) => {
    return {
        type: ACTIONS_TYPE.ADD_POST,
        payload: {newPostText},
    } as const
}

export const sendNewMessageAC = (newMessageText: string) => {
    return {
        type: ACTIONS_TYPE.SEND_NEW_MESSAGE,
        payload: {newMessageText},
    } as const
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

export const getUserProfileTC = (userId: number): AppThunkType => async (dispatch) => {
    userId = userId || 22904;
    const response = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfile(response));
}

export const getUserStatusTC = (userId: number): AppThunkType => async (dispatch) => {
    userId = userId || 22904;
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response));
}

export const updateUserStatusTC = (status: string): AppThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}