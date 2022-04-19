import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";


type MyPostsPropsType = {
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    newPostText: string
    onClickHandler: () => void
    mappedPosts: Array<any>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {onChangeHandler, newPostText,onClickHandler,mappedPosts} = props;

    return (
        <div className={s.main}>
            <h3>My posts</h3>
            <div className={s.input}>
                <textarea onChange={(e) => onChangeHandler(e)} value={newPostText}/>
                <button onClick={onClickHandler}>add post</button>
            </div>
            <div className={s.boxForPosts}>
                {mappedPosts}
            </div>
        </div>
    );
};