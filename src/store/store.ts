import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

export type UserType = {
    name: string,
    id: string,
    message: string,
}

export type MessageType = {
    id: string,
    message: string,
}

export type PostsType = {
    id: string,
    message: string,
    likesCount: number,
}

export type ProfilePage = {
    posts: Array<PostsType>
}

export type MessagePage = {
    users: Array<UserType>,
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePage
    messagePage: MessagePage
}


export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi", likesCount: 10},
            {id: v1(), message: "How are you", likesCount: 12},
            {id: v1(), message: "Hey", likesCount: 16},
            {id: v1(), message: "HOUA", likesCount: 7},
        ],
    },
    messagePage: {
        users: [
            {id: v1(), name: "User1", message: "Hi"},
            {id: v1(), name: "User2", message: "How are you"},
            {id: v1(), name: "User3", message: "Hey"},
            {id: v1(), name: "User4", message: "HOUA"},
        ],
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "How are you"},
            {id: v1(), message: "Hey"},
            {id: v1(), message: "HOUA"},
        ],
    }
}

export const addPost = (post: string) => {
    let newPost = {id: v1(), message: post, likesCount: 0}
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const changeArea = (value: string) => {
    console.log(value);
    // rerenderEntireTree(state);
}
