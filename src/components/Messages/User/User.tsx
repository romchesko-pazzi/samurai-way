import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./User.module.css";
import {MessagePage} from "../../../store/store";


export const User: React.FC<MessagePage> = (props) => {

    const {users} = props;
    // const path = "/messages/" + id;

    const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const xxxx = () => {
        alert(textAreaRef.current?.value);
    }


    const mappedUsers = users.map(m => <div key={m.id} className={s.user}>
        <img src="https://i1.sndcdn.com/artworks-VTCwyUVS9pbVSztP-IyNZmA-t500x500.jpg" alt=""/>
        <div className={s.boxForNameAndText}>
            <div>
                {m.name}
            </div>
            <div>
                {m.message}
            </div>
        </div>
        <div>
            <textarea ref={textAreaRef}> </textarea>
            <button onClick={xxxx}>post</button>
        </div>
    </div>);


    return (
        <div className={s.userMain}>
            {mappedUsers}
        </div>
    );
};
