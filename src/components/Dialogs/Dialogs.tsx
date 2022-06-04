import React from 'react';
import {MapDispatchToPropsType, MessageType, UserType} from "./DialogsContainer";
import s from "./Dialogs.module.css";

type UsersType = {
    messages: Array<MessageType>
    users: Array<UserType>
    messageText: string
}

export type UsersPropsType = MapDispatchToPropsType & UsersType

export const Dialogs: React.FC<UsersPropsType> = (props) => {

    const {messageText, users, messages, onChangeHandler, onClickHandler} = props;

    return (
        <div className={s.userMain}>
            {users.map((m: any) => <div key={m.id} className={s.user}>
                <img src="https://i1.sndcdn.com/artworks-VTCwyUVS9pbVSztP-IyNZmA-t500x500.jpg" alt=""/>
                <div className={s.boxForName}>
                    <div>
                        {m.name}
                    </div>
                </div>
            </div>)}
            <div>
                <textarea onChange={(event) => onChangeHandler(event)}
                          value={messageText}/>
                <button onClick={onClickHandler}>send</button>
            </div>
            {messages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    );
};
