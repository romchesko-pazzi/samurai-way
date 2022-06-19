import React from 'react';
import s from "./Dialogs.module.css";
import SendMessageForm from "./SendMessageForm";
import {MessageType, UserType} from "../../store/reducers/MessagesReducer";

type UsersPropsType = {
    messages: Array<MessageType>
    users: Array<UserType>
    sendMessage: (newMessageText: string) => void
}

export const Dialogs: React.FC<UsersPropsType> = (props) => {

    const {users, messages, sendMessage} = props;

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
            <SendMessageForm sendMessage={sendMessage}/>
            {messages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    );
};
