import {UserType} from "../components/Users/UsersContainer";

export enum ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
}

export type ActionType = FollowType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType;
type FollowType = ReturnType<typeof followAC>;
type SetUsersType = ReturnType<typeof setUsersAC>;
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>;
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>;

export const followAC = (userId: string) => {
    return {
        type: ACTIONS_TYPE.FOLLOW,
        payload: {userId}
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        payload: {users}
    } as const
}

export const setCurrentPageAC = (pageNumber: number) => {
    return {
        type: ACTIONS_TYPE.SET_CURRENT_PAGE,
        payload: {pageNumber}
    } as const
}

export const setTotalUsersCountAC = (usersCount: number) => {
    return {
        type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
        payload: {usersCount}
    } as const
}
