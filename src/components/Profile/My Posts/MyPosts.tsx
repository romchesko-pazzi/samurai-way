import React from 'react';
import s from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import AddPostForm from "./AddPostForm";

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts} = props;
    return (
        <div className={s.main}>
            <h3>My posts</h3>
            <AddPostForm/>
            <div className={s.boxForPosts}>
                {posts.map(p => <div key={p.id}>{p.message}</div>)}
            </div>
        </div>
    );
};