import {AuthDataType} from "../../components/Header/HeaderContainer";
import {authAPI} from "../../api/api";
import {AuthThunkType} from "./hooks";

enum ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

export type AuthActionType = SetUserDataType;
type SetUserDataType = ReturnType<typeof setAuthUserData>;


const initialState: AuthDataType = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
}

export const AuthReducer = (state = initialState, action: AuthActionType): AuthDataType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA: {
            return {...state, ...action.payload, isAuth: true}
        }
        default:
            return state
    }
}


export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {id, email, login},
    } as const
}

export const getAuthUserDataTC = (): AuthThunkType => (dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AuthThunkType => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC());
            }
        })
        .catch(err => {
            console.log(err);
        })
}