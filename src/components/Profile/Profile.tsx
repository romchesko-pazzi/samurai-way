import React, {useState} from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./My Posts/MyPosts";
import {PostsType, ProfilePage} from "../../store/store";

type ProfilePageType = {
    posts: Array<PostsType>,
    addPostCallback: (post: string) => void,
    changeAreaCallback: (value: string) => void,
}


export const Profile: React.FC<ProfilePageType> = (props) => {

    const {posts,addPostCallback,changeAreaCallback} = props;


    return (
        <div className={s.profile}>
            <div className={s.aboutInfo}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/originals/05/14/22/05142254f4fde301a4ebbd27434663b0.png"
                         alt="avatar"/>
                </div>
            </div>
            <MyPosts posts={posts} addPostCallback={addPostCallback} changeAreaCallback={changeAreaCallback}/>
        </div>
    );
};