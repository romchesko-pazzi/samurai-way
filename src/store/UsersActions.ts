import {UserType} from "../components/Users/UsersContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ActionTypeForApp} from "./types";

export enum ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_LOADING_ICON = "SET_LOADING_ICON",
    SET_FOLLOW_LOADING = "SET_FOLLOW_LOADING",
}

export type UsersActionType =
    FollowType |
    SetUsersType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    SetLoadingIconType |
    SetFollowLoadingType;

type FollowType = ReturnType<typeof follow>;
type SetUsersType = ReturnType<typeof setUsers>;
type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>;
type SetLoadingIconType = ReturnType<typeof setLoadingIcon>;
type SetFollowLoadingType = ReturnType<typeof setFollowLoading>;


export const follow = (userId: string) => {
    return {
        type: ACTIONS_TYPE.FOLLOW,
        payload: {userId}
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        payload: {users}
    } as const
}

export const setCurrentPage = (pageNumber: number) => {
    return {
        type: ACTIONS_TYPE.SET_CURRENT_PAGE,
        payload: {pageNumber}
    } as const
}

export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
        payload: {usersCount}
    } as const
}

export const setLoadingIcon = (isLoading: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_LOADING_ICON,
        payload: {isLoading}
    } as const
}

export const setFollowLoading = (isFetching: any, userId: string) => {
    return {
        type: ACTIONS_TYPE.SET_FOLLOW_LOADING,
        payload: {isFetching, userId}
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionTypeForApp>) => {
    dispatch(setLoadingIcon(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setLoadingIcon(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
}

export const choosePageThunkCreator = (pageNumber: number, pageSize: number) => (dispatch: Dispatch<ActionTypeForApp>) => {
    dispatch(setLoadingIcon(true));
    usersAPI.choosePageNumber(pageNumber, pageSize)
        .then(data => {
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(pageNumber));
            dispatch(setLoadingIcon(false));
        });
}

export const unfollowThunkCreator = (userID: string) => (dispatch: Dispatch<ActionTypeForApp>) => {
    dispatch(setFollowLoading(true, userID));
    profileAPI.unFollow(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID));
            }
            dispatch(setFollowLoading(false, userID));
        })
}

export const followThunkCreator = (userID: string) => (dispatch: Dispatch<ActionTypeForApp>) => {
    dispatch(setFollowLoading(true, userID));
    profileAPI.follow(userID)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userID));
            }
            dispatch(setFollowLoading(false, userID));
        })
}

