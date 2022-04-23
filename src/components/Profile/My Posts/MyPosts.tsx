import React from 'react';
import s from "./MyPosts.module.css";
import {MapDispatchToPropsType, ProfilePage} from "./MyPostsContainer";

type MyPostsPropsType = MapDispatchToPropsType & ProfilePage

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {onChangeHandler, newPostText, onClickHandler, posts} = props;
    return (
        <div className={s.main}>
            <h3>My posts</h3>
            <div className={s.input}>
                <textarea onChange={(e) => onChangeHandler(e)} value={newPostText}/>
                <button onClick={onClickHandler}>add post</button>
            </div>
            <div className={s.boxForPosts}>
                {posts.map(p => <div key={p.id}>{p.message}</div>)}
            </div>
        </div>
    );
};