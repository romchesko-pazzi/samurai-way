import React, {useState} from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {LogIn} from "./components/LogIn/LogIn";
import {Profile} from "./components/Profile/Profile";
import {addPost, changeArea, PostsType, state, StateType} from "./store/store";
import {v1} from "uuid";

// 31 выпуск
// const [users, setUsers] = useState(state);
// }
// const addPost = (post: string) => {
//     let newPost = {id: v1(), message: post, likesCount: 0}
//     setUsers({...users, profilePage: {...users.profilePage, posts: [newPost, ...users.profilePage.posts]}});

const App: React.FC<StateType> = (props) => {

    const {messagePage} = props

    return (
        <BrowserRouter>
            <Header/>
            <div className={s.wrapper}>
                <Sidebar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={"profile/*"}
                               element={<Profile
                                   posts={state.profilePage.posts}
                                   addPostCallback={addPost}
                                   changeAreaCallback={changeArea}
                               />}
                        />
                        <Route path={"messages/*"}
                               element={<Messages users={messagePage.users} messages={messagePage.messages}/>}/>
                        <Route path={"friends/*"} element={<Friends/>}/>
                        <Route path={"logIn/*"} element={<LogIn/>}/>
                        <Route path={"settings/*"} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;