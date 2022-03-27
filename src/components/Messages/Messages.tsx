import React from 'react';
import s from "./Messages.module.css"
import {User} from './User/User';
import {MessagePage} from "../../store/store";


export const Messages: React.FC<MessagePage> = (props) => {

    const {users, messages} = props

    // const mappedUsers = users.map(m => <User key={m.id} name={m.name} id={m.id}/>);
    // const mappedMessages = messages.map(m => <Chat key={m.id} id={m.id} message={m.message}/>)

    return (
        <div className={s.messages}>
            <div className={s.mainBox}>
                <div className={s.boxForFullUser}>
                    <User users={users} messages={messages}/>
                </div>
            </div>
        </div>
    );
};

