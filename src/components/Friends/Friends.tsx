import React from 'react';
import s from "./Friends.module.css"

export const Friends = () => {
    return (
        <div className={s.mainFriends}>
            <div className={s.dialog}>
                <div className={s.avatar}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt=""/>
                </div>
                <div className={s.dialogContent}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque consectetur consequatur
                        ea ex iure laudantium porro, quo sunt. Aut autem consequatur, dolores ducimus iste minus nihil
                        quidem tempore ut!</p>
                </div>
            </div>
        </div>
    );
};