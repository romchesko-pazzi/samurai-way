import React from 'react';
import s from "./Messages.module.css"
import {UserContainer} from "./User/UserContainer";

export const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.mainBox}>
                <UserContainer/>
            </div>
        </div>
    );
};

