import React, {ChangeEvent} from 'react';
import s from "./User.module.css";

type UserType = {
    mappedUsers: Array<any>
    mappedMessages: Array<any>
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
    messageText: string
    onClickHandler: () => void
}


export const User: React.FC<UserType> = (props) => {
    console.log("User");
    const {messageText, mappedUsers, mappedMessages, onChangeHandler, onClickHandler} = props;

    return (
        <div className={s.userMain}>
            {mappedUsers}
            <div>
                <textarea onChange={(event) => onChangeHandler(event)}
                          value={messageText}/>
                <button onClick={onClickHandler}>send</button>
            </div>
            {mappedMessages}
        </div>
    );

};
