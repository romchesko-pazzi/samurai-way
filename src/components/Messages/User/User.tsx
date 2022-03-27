import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./User.module.css";
import {MessagePage} from "../../../store/store";


export const User: React.FC<MessagePage> = (props) => {

    const {users} = props;
    // const path = "/messages/" + id;


    const mappedUsers = users.map(m => <div className={s.user}>
        <img src="https://i1.sndcdn.com/artworks-VTCwyUVS9pbVSztP-IyNZmA-t500x500.jpg" alt=""/>
        <div className={s.boxForNameAndText}>
            <div>
                {m.name}
            </div>
            <div>
                {m.message}
            </div>
        </div>
    </div>);


    return (
        <div className={s.userMain}>
            {mappedUsers}
        </div>
    );
};
