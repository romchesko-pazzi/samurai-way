import React from 'react';
import s from "./Users.module.css";
import {UserType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

type UsersPresentPropsType = {
    currentPage: number
    choosePage: (chosenPage: number) => void
    users: Array<UserType>
    totalCount: number
    pageSize: number
    isFollowed: Array<any>
    unfollowTC: any
    followTC: any
}

export const UsersPresent: React.FC<UsersPresentPropsType> = (props) => {

    const {
        currentPage,
        pageSize,
        totalCount,
        users,
        isFollowed,
        choosePage,
        unfollowTC,
        followTC,
    } = props

    const pagesCount = Math.ceil(totalCount / pageSize);
    const pagesCountArray = [];
    for (let i = 1; i <= 80; i++) {
        pagesCountArray.push(i);
    }

    return (
        <div className={s.main}>
            <div className={s.paginationBlock}>
                {pagesCountArray.map((m, index) => {
                        return <span key={index}
                                     className={currentPage === m ? s.selectedPage : ""}
                                     onClick={() => choosePage(m)}>{m}</span>
                    }
                )}
            </div>
            {users.map(m =>
                <div key={m.id} className={s.user}>
                    <div className={s.leftBlock}>
                        <div>
                            <NavLink to={"/profile/" + m.id}>
                                {m.photos.small
                                    ? <img src={m.photos.small} alt="avatar"/>
                                    : <img src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
                                           alt="avatar"/>}
                            </NavLink>
                        </div>
                        <div className={s.btn}>
                            {m.followed
                                ? <button
                                    onClick={() => unfollowTC(m.id)}
                                    disabled={isFollowed.some(id => id === m.id)}>Unfollow</button>
                                : <button
                                    onClick={() => followTC(m.id)}
                                    disabled={isFollowed.some(id => id === m.id)}>Follow</button>
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
        </div>
    );
};