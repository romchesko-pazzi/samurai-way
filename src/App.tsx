import React from 'react';
import "./App.css";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {LogIn} from "./components/LogIn/LogIn";
import {Profile} from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    //До 45 выпуска. 45-> переход на connect()
    // const profilePage = useSelector<RootStateType, ProfilePage>(state => state.profilePage);
    // const messagePage = useSelector<RootStateType, MessagePage>(state => state.messagePage);

    return (
        <BrowserRouter>
            <Header/>
            <div className={"wrapper"}>
                <Sidebar/>
                <div className={"content"}>
                    <Routes>
                        <Route path={"profile/*"}
                               element={<Profile/>}/>
                        <Route path={"messages/*"}
                               element={<Messages/>}/>
                        <Route path={"users/*"} element={<UsersContainer/>}/>
                        <Route path={"logIn/*"} element={<LogIn/>}/>
                        <Route path={"settings/*"} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;