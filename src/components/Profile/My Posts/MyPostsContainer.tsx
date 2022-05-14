import React, {ChangeEvent} from 'react';
import {addPostAC, updatePostTextAC} from "../../../store/ProfileAndMessagesActions";
import {connect} from "react-redux";
import {RootStateType} from "../../../store/store";
import {MyPosts} from "./MyPosts";
import {ProfilePageType} from "../ProfileContainer";
import {Dispatch} from "redux";

export type MapDispatchToPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickHandler: () => void
}

export type MyPostsPropsType = MapDispatchToPropsType & ProfilePageType;

const mapStateToProps = (state: RootStateType): ProfilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userProfile: state.profilePage.userProfile,
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