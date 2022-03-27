import React from 'react';
import s from "./MyPosts.module.css";
import {PostsType} from "../../../store/store";

type MyPostsPropsType = {
    posts: Array<PostsType>
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {posts} = props;

    const mappedMessages = posts.map(p => <div key={p.id}>{p.message}</div>)

    return (
        <div className={s.main}>
            <h3>My posts</h3>
            <div className={s.input}>
                <input type="text"/>
                <button>post</button>
            </div>
            <div className={s.boxForPosts}>
                {mappedMessages}
            </div>
        </div>
    );
};