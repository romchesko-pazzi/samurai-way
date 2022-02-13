import React from 'react';
import s from "./Home.module.css";

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.avatar}>
                <img src="https://www.iconninja.com/files/691/206/532/avatar-ninja-samurai-warrior-icon.svg" alt=""/>
            </div>
            <div className={s.blockForTextarea}>
                <textarea placeholder={"What's new?"}>

                </textarea>
                <button>add</button>
            </div>
        </div>
    );
};