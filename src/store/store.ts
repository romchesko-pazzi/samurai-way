export type UserType = {
    name: string,
    id: number,
    message: string,
}

export type MessageType = {
    id: number,
    message: string,
}

export type PostsType = {
    id: number,
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
            {id: 1, message: "Hi", likesCount: 10},
            {id: 2, message: "How are you", likesCount: 12},
            {id: 3, message: "Hey", likesCount: 16},
            {id: 4, message: "HOUA", likesCount: 7},
        ],
    },
    messagePage: {
        users: [
            {id: 1, name: "User1", message: "Hi"},
            {id: 2, name: "User2", message: "How are you"},
            {id: 3, name: "User3", message: "Hey"},
            {id: 4, name: "User4", message: "HOUA"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Hey"},
            {id: 4, message: "HOUA"},
        ],
    }
}
