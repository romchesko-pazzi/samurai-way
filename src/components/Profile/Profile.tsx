import React from 'react';
import s from "./Profile.module.css";
import {MyPosts} from "./My Posts/MyPosts";
import {ProfilePage} from "../../store/store";

export const Profile: React.FC<ProfilePage> = (props) => {

    const {posts} = props;

    return (
        <div className={s.profile}>
            <div className={s.aboutInfo}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/originals/05/14/22/05142254f4fde301a4ebbd27434663b0.png"
                         alt="avatar"/>
                </div>
            </div>
            <MyPosts posts={posts} />
        </div>
    );
};