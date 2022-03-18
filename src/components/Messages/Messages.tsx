import React from 'react';
import s from "./Messages.module.css"
import {User} from './User';
import {Chats} from "./Chats";

export const Messages = () => {

    const messagesData = [
        {id: 1, name: "User1"},
        {id: 2, name: "User2"},
        {id: 3, name: "User3"},
        {id: 4, name: "User4"},
    ]

    const mappedUsers = messagesData.map(m => <User name={m.name} id={m.id}/>);

    return (
        <div className={s.messages}>
            <div className={s.users}>
                {mappedUsers}
            </div>
            <div className={s.chats}>
                <Chats/>
            </div>
        </div>
    );
};

