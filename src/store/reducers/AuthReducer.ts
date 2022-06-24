import {AuthDataType} from "../../components/Header/HeaderContainer";
import {authAPI} from "../../api/api";
import {AppThunkType} from "../hooks";

enum ACTIONS_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
    STOP_SUBMIT = "STOP_SUBMIT",
}

export type AuthActionType = SetUserDataType | StopSubmitType;
type SetUserDataType = ReturnType<typeof setAuthUserData>;
type StopSubmitType = ReturnType<typeof stopSubmit>;


const initialState: AuthDataType = {
    id: null,
    email: "",
    login: "",
    isAuth: false,
    error: "",
}

export const AuthReducer = (state = initialState, action: AuthActionType): AuthDataType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA:
        case ACTIONS_TYPE.STOP_SUBMIT: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string, login: string, isAuth: boolean, error: string) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {id, email, login, isAuth, error},
    } as const
}

export const stopSubmit = (error: string) => {
    return {
        type: ACTIONS_TYPE.STOP_SUBMIT,
        payload: {error}
    } as const
}

export const getAuthUserDataTC = (): AppThunkType => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true, ""));
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC());
    } else {
        const error = response.data.messages[0]
        dispatch(stopSubmit(error));
    }
}

export const logOut = (): AppThunkType => async (dispatch) => {
    await authAPI.logOut();
    dispatch(setAuthUserData(null, "", "", false, ""));
}