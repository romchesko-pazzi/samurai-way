import React from 'react';
import {MessageType, UserType} from "./DialogsContainer";
import s from "./Dialogs.module.css";
import SendMessageForm from "./SendMessageForm";

type UsersType = {
    messages: Array<MessageType>
    users: Array<UserType>
    messageText: string
}

export type UsersPropsType = UsersType

export const Dialogs: React.FC<UsersPropsType> = (props) => {

    const {users, messages} = props;

    return (
        <div className={s.userMain}>
            {users.map(m => <div key={m.id} className={s.user}>
                <img src="https://i1.sndcdn.com/artworks-VTCwyUVS9pbVSztP-IyNZmA-t500x500.jpg" alt=""/>
                <div className={s.boxForName}>
                    <div>
                        {m.name}
                    </div>
                </div>
            </div>)}
            <SendMessageForm/>
            {messages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    );
};
