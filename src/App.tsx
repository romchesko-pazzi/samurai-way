import React from 'react';
import s from './App.module.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";

const App = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Sidebar/>
            <div className={s.content}>
                CONTENT
            </div>
        </div>
    )
}

export default App;