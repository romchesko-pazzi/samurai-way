import React from 'react';
import s from "./Messages.module.css"
import {NavLink} from "react-router-dom";

export const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.users}>
                <NavLink to={"/messages/1"}>user1</NavLink>
                <NavLink to={"/messages/2"}>user2</NavLink>
                <NavLink to={"/messages/3"}>user3</NavLink>
                <NavLink to={"/messages/4"}>user4</NavLink>
            </div>
            <div className={s.dialogWithUsers}>
                #dialogWithUsers
            </div>
        </div>
    );
};

