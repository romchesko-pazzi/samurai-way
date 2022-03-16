import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";
import {Home} from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {LogIn} from "./components/LogIn/LogIn";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className={s.wrapper}>
                <Sidebar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={"home/*"} element={<Home/>}/>
                        <Route path={"messages/*"} element={<Messages/>}/>
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