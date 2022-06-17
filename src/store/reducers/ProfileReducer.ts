import {ACTIONS_TYPE, ActionType} from "../ProfileAndMessagesActions";
import {v1} from "uuid";
import {UserProfileType} from "../../components/Profile/ProfileInfo";
import {PostsType} from "../../components/Profile/ProfileContainer";

type InitType = {
    posts: Array<PostsType>
    newPostText: string
    userProfile: UserProfileType
    isAuth: boolean
    status: string
}

const initialState: InitType = {
    newPostText: "",
    posts: [
        {id: v1(), message: "MyPost1", likesCount: 10},
        {id: v1(), message: "chiki-briki", likesCount: 12},
        {id: v1(), message: "Hey", likesCount: 16},
        {id: v1(), message: "kek", likesCount: 7},
    ],
    userProfile: {
        aboutMe: "",
        lookingForAJob: false,
        lookingForAJobDescription: " ",
        fullName: " ",
        userId: 0,
        photos: {
            small: "",
            large: "",
        },
        contacts: {
            facebook: " ",
            website: " ",
            twitter: " ",
            instagram: " ",
            youtube: " ",
            github: " ",
            mainLink: " ",
            vk: " ",
        }
    },
    isAuth: false,
    status: "",
}


export const ProfileReducer = (state = initialState, action: ActionType): InitType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_STATUS: {
            return {...state, ...action.payload};
        }
        case ACTIONS_TYPE.ADD_POST: {
            let x = {id: v1(), message: action.payload.newPostText, likesCount: 0};
            return {...state, posts: [x, ...state.posts], newPostText: ""};
        }
        case ACTIONS_TYPE.SET_USER_PROFILE: {
            return {...state, userProfile: action.payload.profile}
        }
        default:
            return state;
    }
}

