import {ACTIONS_TYPE, ActionType} from "./actions";
import {v1} from "uuid";
import {ProfilePage} from "./custom-redux";

const initialState: ProfilePage = {
    newPostText: "",
    posts: [
        {id: v1(), message: "MyPost1", likesCount: 10},
        {id: v1(), message: "chiki-briki", likesCount: 12},
        {id: v1(), message: "Hey", likesCount: 16},
        {id: v1(), message: "kek", likesCount: 7},
    ],
}


export const ProfileReducer = (state: ProfilePage = initialState, action: ActionType): ProfilePage => {
    switch (action.type) {
        case ACTIONS_TYPE.UPDATE_POST_TEXT: {
            return {...state, newPostText: action.payload.newText}
        }
        case ACTIONS_TYPE.ADD_POST: {
            let x = {id: v1(), message: state.newPostText, likesCount: 0};
            return {...state, posts: [x, ...state.posts], newPostText: ""}
        }
        default:
            return state;
    }
}