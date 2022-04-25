import {v1} from "uuid";
import {MessagesReducer} from "./MessagesReducer";
import {ProfileReducer} from "./ProfileReducer";
import {ActionType} from "./ProfileAndMessagesActions";
import {ProfilePage} from "../components/Profile/My Posts/MyPostsContainer";
import {MessagePageType} from "../components/Messages/User/UserContainer";

export type RootStateType = {
    profilePage: ProfilePage
    messagePage: MessagePageType
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

let x = [
    {
        id: v1(), isFriend: true, name: "Sasha", status: "I am looking for a job", location: {
            city: "Kiev",
            country: "Ukraine"
        }
    },
    {
        id: v1(), isFriend: true, name: "Roma", status: "I am looking for a job", location: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        id: v1(), isFriend: false, name: "Nikolai", status: "I am looking for a workers", location: {
            city: "Berlin",
            country: "Germany"
        }
    },
]