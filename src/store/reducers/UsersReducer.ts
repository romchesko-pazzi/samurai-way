import {ACTIONS_TYPE, ActionType} from "../UsersActions";
import {UsersPageType} from "../../components/Users/UsersContainer";

const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 4,
    currentPage: 1,
    isLoading: false,
    isFollowed: [],
}

export const UsersReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: !m.followed} : m)
            }
        }
        case ACTIONS_TYPE.SET_LOADING_ICON:
        case ACTIONS_TYPE.SET_USERS: {
            return {...state, ...action.payload}
        }
        case ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.pageNumber}
        }
        case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.payload.usersCount}
        }
        case ACTIONS_TYPE.SET_FOLLOW_LOADING: {
            return {
                ...state, isFollowed: action.payload.isFetching
                    ? [...state.isFollowed, action.payload.userId]
                    : state.isFollowed.filter(f => f !== action.payload.userId)
            }
        }

        default:
            return state
    }
}