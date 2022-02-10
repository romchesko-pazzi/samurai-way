import React from 'react';
import s from "./Header.module.css";

export const Header = () => {
    return (
        <div className={s.test}>
            <div>
                <a href="">Home</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="">Settings</a>
            </div>
            <div>
                <a href="">Friends</a>
            </div>
        </div>
    );
};