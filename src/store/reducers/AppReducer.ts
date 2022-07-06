import {AppThunkType} from "../hooks";
import {getAuthUserDataTC} from "./AuthReducer";

export type AppDataType = {
    initialized: boolean
}
export type AppActionType = SetInitializedType;
type SetInitializedType = ReturnType<typeof setInitData>

const initialState: AppDataType = {
    initialized: false
}


export const AppReducer = (state = initialState, action: AppActionType): AppDataType => {
    switch (action.type) {
        case "SET_INIT_DATA": {
            return {...state, initialized: true}
        }
        default: {
            return state
        }
    }
}


const setInitData = () => {
    return {
        type: "SET_INIT_DATA"
    } as const
}

export const initializeApp = (): AppThunkType => async (dispatch) => {
    await dispatch(getAuthUserDataTC());
    dispatch(setInitData());
}