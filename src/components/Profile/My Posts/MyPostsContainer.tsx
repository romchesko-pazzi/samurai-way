import {ChangeEvent} from 'react';
import {ActionType, addPostAC, updatePostTextAC} from "../../../store/ProfileAndMessagesActions";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {RootStateType} from "../../../store/store";
import {MyPostsClass} from "./MyPostsClass";

export type ProfilePage = {
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type MapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
}

const mapStateToProps = (state: RootStateType): ProfilePage => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePostTextAC(e.currentTarget.value))
        },
        onClickHandler: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsClass)