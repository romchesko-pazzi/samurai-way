import React from 'react';
import s from "./MyPosts.module.css";
import {AddPostForm} from "./AddPostForm";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, addPost} = props;
    return (
        <div className={s.main}>
            <h3>My posts</h3>
            <AddPostForm addPost={addPost}/>
            <div className={s.boxForPosts}>
                {posts.map(p => <div key={p.id}>{p.message}</div>)}
            </div>
        </div>
    );
};