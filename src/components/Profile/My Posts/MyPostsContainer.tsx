import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../store/ProfileAndMessagesActions";

export const MyPostsContainer = () => {
    const {posts} = useAppSelector(state => state.profilePage);
    const dispatch = useAppDispatch();
    const addPostText = (newPostText: string) => {
        dispatch(addPostAC(newPostText));
    };

    return <MyPosts posts={posts} addPost={addPostText}/>
}