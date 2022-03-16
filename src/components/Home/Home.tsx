import React from 'react';
import s from "./Home.module.css";

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.avatar}>
                avatar
            </div>
            <div className={s.info}>
                Name Surname
                Date of Birth:
                City:
                Education:
            </div>
        </div>
    );
};