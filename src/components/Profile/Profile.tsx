import React from 'react';
import s from "./Profile.module.css";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.aboutInfo}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/originals/05/14/22/05142254f4fde301a4ebbd27434663b0.png"
                         alt="avatar"/>
                </div>
            </div>
            <MyPostsContainer/>
        </div>
    );
};