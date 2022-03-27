import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css";
import {PostsType} from "../../../store/store";

// ДОБАВЛЕНИЕ С ПОМОЩЬЮ СТЕЙТА 31 выпуск
// const [inputValue, setInputValue] = useState("");
// const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.currentTarget.value);
// }
//
// const onClickHandler = () => {
//     if (inputValue !== "") {
//         callback(inputValue);
//         setInputValue("");
//     }
// }

type MyPostsPropsType = {
    posts: Array<PostsType>,
    addPostCallback: (post: string) => void,
    changeAreaCallback: (value: string) => void,
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {posts, addPostCallback, changeAreaCallback} = props;

    const mappedMessages = posts.map(p => <div key={p.id}>{p.message}</div>)

    const addPostRef = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        if (addPostRef.current) {
            addPostCallback(addPostRef.current.value);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeAreaCallback(e.currentTarget.value);
    }

    return (
        <div className={s.main}>
            <h3>My posts</h3>
            <div className={s.input}>
                <textarea onChange={onChangeHandler} ref={addPostRef}> </textarea>
                <button onClick={onClickHandler}>post</button>
            </div>
            <div className={s.boxForPosts}>
                {mappedMessages}
            </div>
        </div>
    );
};