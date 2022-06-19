import React from 'react';
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Settings} from "./components/Settings/Settings";
import {SignIn} from "./components/Login/SignIn";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


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
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/users/"}
                           render={() => <UsersContainer/>}/>
                    <Route path={"/logIn/"}
                           render={() => <SignIn/>}/>
                    <Route path={"/settings/"}
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;