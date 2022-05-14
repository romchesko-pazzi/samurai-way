import React from 'react';
import "./App.css";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Settings} from "./components/Settings/Settings";
import {LogIn} from "./components/LogIn/LogIn";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (
        <BrowserRouter>
            <HeaderContainer/>
            <div className={"wrapper"}>
                <Sidebar/>
                <div className={"content"}>
                    <Route path={"/profile/:userId?"}
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/messages/"}
                           render={() => <Messages/>}/>
                    <Route path={"/users/"}
                           render={() => <UsersContainer/>}/>
                    <Route path={"/logIn/"}
                           render={() => <LogIn/>}/>
                    <Route path={"/settings/"}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;