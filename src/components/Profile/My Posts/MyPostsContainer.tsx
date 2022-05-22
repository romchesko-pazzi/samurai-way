import React, {ChangeEvent} from 'react';
import {addPostAC, updatePostTextAC} from "../../../store/ProfileAndMessagesActions";
import {connect} from "react-redux";
import {RootStateType} from "../../../store/store";
import {MyPosts} from "./MyPosts";
import {PostsType} from "../ProfileContainer";
import {Dispatch} from "redux";

export type MapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
}

type PostsPageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type MyPostsPropsType = MapDispatchToPropsType & PostsPageType;

const mapStateToProps = (state: RootStateType): PostsPageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onClickHandler: () => {
            dispatch(addPostAC())
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePostTextAC(e.currentTarget.value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);