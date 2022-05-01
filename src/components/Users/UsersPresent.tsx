import React from 'react';
import s from "./Users.module.css";
import {UserType} from "./UsersContainer";

type UsersPresentPropsType = {
    currentPage: number
    choosePage: (chosedPage: number) => void
    users: Array<UserType>
    follow: (userId: string) => void
    totalCount: number
    pageSize: number
}

export const UsersPresent: React.FC<UsersPresentPropsType> = (props) => {

    const {currentPage, pageSize, choosePage, totalCount, users, follow} = props

    const pagesCount = Math.ceil(totalCount / pageSize);
    const pagesCountArray = [];
    for (let i = 1; i <= pagesCount; i++) {
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
                            {m.photos.small
                                ? <img src={m.photos.small} alt="avatar"/>
                                : <img src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
                                       alt="avatar"/>}
                        </div>
                        <div className={s.btn}>
                            {m.followed
                                ? <button onClick={() => follow(m.id)}>Follow</button>
                                : <button onClick={() => follow(m.id)}>Unfollow</button>
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