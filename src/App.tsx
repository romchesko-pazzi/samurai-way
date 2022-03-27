import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {LogIn} from "./components/LogIn/LogIn";
import {Profile} from "./components/Profile/Profile";
import {StateType} from "./store/store";


const App: React.FC<StateType> = (props) => {

    const {messagePage,profilePage} = props

    return (
        <BrowserRouter>
            <Header/>
            <div className={s.wrapper}>
                <Sidebar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={"profile/*"} element={<Profile posts={profilePage.posts}/>}/>
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