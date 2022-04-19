import {v1} from "uuid";
// import {rerenderEntireTree} from "../index";
import {MessagesReducer} from "./MessagesReducer";
import {ProfileReducer} from "./ProfileReducer";
import {ACTIONS_TYPE, ActionType, GeneralMessagesType, GeneralProfileType} from "./actions";

export type UserType = {
    name: string
    id: string
}

export type MessageType = {
    id: string
    message: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
}

export type MessagePage = {
    users: Array<UserType>
    messageText: string,
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePage
    messagePage: MessagePage
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: v1(), message: "MyPost1", likesCount: 10},
                {id: v1(), message: "chiki-briki", likesCount: 12},
                {id: v1(), message: "Hey", likesCount: 16},
                {id: v1(), message: "kek", likesCount: 7},
            ],
        },
        messagePage: {
            users: [
                {id: v1(), name: "User1"},
                {id: v1(), name: "User2"},
                {id: v1(), name: "User3"},
                {id: v1(), name: "User4"},
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "chiki-briki"},
                {id: v1(), message: "lolkek"},
                {id: v1(), message: "hehehe"},
            ],
            messageText: "",
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.messagePage = MessagesReducer(this._state.messagePage, action);
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        // rerenderEntireTree(this._state);
    }
}