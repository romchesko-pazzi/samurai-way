import {RootStateType} from "./store";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users;
}
export const getTotalCount = (state: RootStateType) => {
    return state.usersPage.totalCount;
}
export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage;
}
export const getPageSize = (state: RootStateType) => {
    return state.usersPage.pageSize;
}
export const getIsLoading = (state: RootStateType) => {
    return state.usersPage.isLoading;
}
export const getIsFollowed = (state: RootStateType) => {
    return state.usersPage.isFollowed;
}