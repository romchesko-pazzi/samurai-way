import React from 'react';
import s from "./User.module.css";
import {MapDispatchToPropsType, MessagePageType} from "./UserContainer";
import {Redirect} from "react-router-dom";

export type UsersPropsType = MapDispatchToPropsType & MessagePageType

export const Users: React.FC<UsersPropsType> = (props) => {
    const {messageText, users, messages, onChangeHandler, onClickHandler, isAuth} = props;

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

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
            <div>
                <textarea onChange={(event) => onChangeHandler(event)}
                          value={messageText}/>
                <button onClick={onClickHandler}>send</button>
            </div>
            {messages.map(m => <div key={m.id}>{m.message}</div>)}
        </div>
    );
};
