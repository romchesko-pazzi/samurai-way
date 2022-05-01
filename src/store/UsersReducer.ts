import {ACTIONS_TYPE, ActionType} from "./UsersActions";
import {UsersPageType} from "../components/Users/UsersContainer";

const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 4,
    currentPage: 1,
}

export const UsersReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: !m.followed} : m)
            }
        }
        case ACTIONS_TYPE.SET_USERS: {
            return {...state, users: action.payload.users}
        }
        case ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.payload.usersCount}
        }
        default:
            return state
    }
}