import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../../store/store";
import {MyPosts} from "./MyPosts";
import {PostsType} from "../ProfileContainer";

type PostsPageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type MyPostsPropsType =PostsPageType;

const mapStateToProps = (state: RootStateType): PostsPageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export const MyPostsContainer = connect(mapStateToProps)(MyPosts);