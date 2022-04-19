import React, {ChangeEvent} from 'react';
import {ProfilePage} from "../../../store/custom-redux";
import {addPostAC,updatePostTextAC} from "../../../store/actions";
import {useDispatch} from "react-redux";
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    profilePage: ProfilePage
}


export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const {profilePage} = props;
    const dispatch = useDispatch();

    const mappedPosts = profilePage.posts.map(p => <div key={p.id}>{p.message}</div>)

    const onClickHandler = () => {
        dispatch(addPostAC())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updatePostTextAC(e.currentTarget.value))
    }
    return (
        <MyPosts onChangeHandler={onChangeHandler}
                 newPostText={profilePage.newPostText}
                 onClickHandler={onClickHandler}
                 mappedPosts={mappedPosts}
        />
    );
};