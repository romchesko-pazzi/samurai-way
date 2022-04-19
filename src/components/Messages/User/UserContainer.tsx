import React, {ChangeEvent} from 'react';
import s from "./User.module.css";
import {MessagesType} from "../Messages";
import {addNewMessageText, sendNewMessageAC} from "../../../store/actions";
import {useDispatch} from "react-redux";
import {User} from "./User";


export const UserContainer: React.FC<MessagesType> = (props) => {
    console.log("UserContainer")

    const {messagePage} = props;

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(sendNewMessageAC());
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(addNewMessageText(event.currentTarget.value));
    }

    const mappedMessages = messagePage.messages.map((m, i) => <div key={i}>{m.message}</div>)
    const mappedUsers = messagePage.users.map(m => <div key={m.id} className={s.user}>
        <img src="https://i1.sndcdn.com/artworks-VTCwyUVS9pbVSztP-IyNZmA-t500x500.jpg" alt=""/>
        <div className={s.boxForName}>
            <div>
                {m.name}
            </div>
        </div>
    </div>);

    return (
        <User mappedUsers={mappedUsers}
              mappedMessages={mappedMessages}
              onChangeHandler={onChangeHandler}
              messageText={messagePage.messageText}
              onClickHandler={onClickHandler}
        />
    );
};
