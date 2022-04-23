import {UserType} from "../components/Users/UsersContainer";

export enum ACTIONS_TYPE {
    FOLLOW = "FOLLOW",
    SET_USERS = "SET_USERS",
}

export type ActionType = FollowType | SetUsersType;
type FollowType = ReturnType<typeof followAC>;
type SetUsersType = ReturnType<typeof setUsersAC>;

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
