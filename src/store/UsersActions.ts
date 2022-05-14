import {UserType} from "../components/Users/UsersContainer";

export enum ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    SET_LOADING_ICON = "SET_LOADING_ICON",
}

export type ActionType =
    FollowType |
    SetUsersType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    SetLoadingIconType;

type FollowType = ReturnType<typeof follow>;
type SetUsersType = ReturnType<typeof setUsers>;
type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>;
type SetLoadingIconType = ReturnType<typeof setLoadingIcon>;

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

export const setLoadingIcon = (isLoading:boolean) => {
    return {
        type: ACTIONS_TYPE.SET_LOADING_ICON,
        payload: {isLoading}
    } as const
}
