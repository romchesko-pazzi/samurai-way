import {AuthDataType} from "../../components/Header/HeaderContainer";
import {authAPI} from "../../api/api";
import {AppThunkType} from "../hooks";

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
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string, login: string, isAuth: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_USER_DATA,
        payload: {id, email, login, isAuth},
    } as const
}

export const getAuthUserDataTC = (): AppThunkType => async (dispatch) => {
    const response = await authAPI.authMe();
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC());
    }
}

export const logOut = (): AppThunkType => async (dispatch) => {
    await authAPI.logOut();
    dispatch(setAuthUserData(null, "", "", false));
}