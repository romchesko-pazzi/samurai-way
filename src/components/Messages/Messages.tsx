import React from 'react';
import s from "./Messages.module.css"
import {MessagePage} from "../../store/custom-redux";
import {UserContainer} from "./User/UserContainer";

export type MessagesType = {
    messagePage: MessagePage
}

export const Messages: React.FC<MessagesType> = (props) => {
    console.log("Messages")
    const {messagePage} = props

    return (
        <div className={s.messages}>
            <div className={s.mainBox}>
                <UserContainer messagePage={messagePage}/>
            </div>
        </div>
    );
};

