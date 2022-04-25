import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";

export class UsersClass extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);

    }
    
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div className={s.main}>
                {this.props.users.map(m =>
                    <div key={m.id} className={s.user}>
                        <div className={s.leftBlock}>
                            <div>
                                {m.photos.small
                                    ? <img src={m.photos.small} alt="avatar"/>
                                    : <img src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
                                           alt="avatar"/>}
                            </div>
                            <div className={s.btn}>
                                {m.followed
                                    ? <button onClick={() => this.props.follow(m.id)}>Follow</button>
                                    : <button onClick={() => this.props.follow(m.id)}>Unfollow</button>
                                }
                            </div>
                        </div>
                        <div className={s.rightBlock}>
                            <div>
                                <p className={s.userName}>{m.name}</p>
                                <p>{m.status}</p>
                            </div>
                            <div className={s.location}>
                                <p className={s.cityName}>{"m.location.city"}</p>
                                <p>{"m.location.country"}</p>
                            </div>
                        </div>
                    </div>)}
            </div>)
    }
}