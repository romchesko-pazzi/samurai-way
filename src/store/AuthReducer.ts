import {AuthDataType} from "../components/Header/HeaderContainer";
import {authMe} from "../api/api";
import {Dispatch} from "redux";

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

export const setAuthUserDataTC = () => (dispatch:Dispatch<ActionType>) => {
    authMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}