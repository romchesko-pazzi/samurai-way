import React from 'react';
// import s from "./Users.module.css";
// import {UsersPropsType} from "./UsersContainer";
// import axios from "axios";
//
// export const Users: React.FC<UsersPropsType> = (props) => {
//     const {users, follow, setUsers, totalCount, setTotalUsersCount, currentPage, setCurrentPage, pageSize} = props;
//
//     if (users.length === 0) {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`).then(response => {
//             setUsers(response.data.items);
//             setTotalUsersCount(response.data.totalCount);
//         })
//     }
//
//     const choosePage = (currentMappedPage: number) => {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentMappedPage}`).then(response => {
//             setUsers(response.data.items);
//             setCurrentPage(currentMappedPage);
//         })
//     }
//
//     const totalPages = Math.ceil(totalCount / pageSize);
//     const pagesArray = []
//     for (let i = 1; i <= totalPages; i++) {
//         pagesArray.push(i);
//     }
//
//     return (
//         <div className={s.main}>
//             <div className={s.paginationBlock}>
//                 {pagesArray.map((m, i) => <span
//                     key={i}
//                     className={currentPage === m
//                         ? s.selectedPage : ""}
//                     onClick={() => choosePage(m)}
//                 >{m}</span>)}
//             </div>
//             {users.map(m =>
//                 <div key={m.id} className={s.user}>
//                     <div className={s.leftBlock}>
//                         <div>
//                             {m.photos.small
//                                 ? <img src={m.photos.small} alt="avatar"/>
//                                 : <img src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
//                                        alt="avatar"/>}
//                         </div>
//                         <div className={s.btn}>
//                             {m.followed
//                                 ? <button onClick={() => follow(m.id)}>Follow</button>
//                                 : <button onClick={() => follow(m.id)}>Unfollow</button>
//                             }
//                         </div>
//                     </div>
//                     <div className={s.rightBlock}>
//                         <div>
//                             <p className={s.userName}>{m.name}</p>
//                             <p>{m.status}</p>
//                         </div>
//                         <div className={s.location}>
//                             <p className={s.cityName}>{"m.location.city"}</p>
//                             <p>{"m.location.country"}</p>
//                         </div>
//                     </div>
//                 </div>)}
//         </div>
//     );
// };