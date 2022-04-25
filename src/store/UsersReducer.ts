import {ACTIONS_TYPE, ActionType} from "./UsersActions";
import {UsersPageType} from "../components/Users/UsersContainer";

const initialState: UsersPageType = {
    users: []
}

export const UsersReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.userId ? {...m, followed: !m.followed} : m)
            }
        }
        case ACTIONS_TYPE.SET_USERS:{
            return {...state,users:action.payload.users}
        }
        default:
            return state
    }
}