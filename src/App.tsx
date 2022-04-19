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
import {useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {MessagePage, ProfilePage} from "./store/custom-redux";


const App = () => {

    const profilePage = useSelector<RootStateType, ProfilePage>(state => state.profilePage);
    const messagePage = useSelector<RootStateType, MessagePage>(state => state.messagePage);

    return (
        <BrowserRouter>
            <Header/>
            <div className={s.wrapper}>
                <Sidebar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={"profile/*"}
                               element={<Profile profilePage={profilePage}/>}/>
                        <Route path={"messages/*"}
                               element={<Messages messagePage={messagePage}/>}/>
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