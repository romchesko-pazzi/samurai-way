import {AuthDataType} from "../components/Header/HeaderContainer";

enum ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

const initialState: AuthDataType = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
}

export const AuthReducer = (state = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state
    }
}

type ActionType = SetUserDataType;

type SetUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {id, email, login},
    } as const
}