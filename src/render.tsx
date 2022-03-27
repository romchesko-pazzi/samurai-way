import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {StateType} from "./store/store";

export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App profilePage={state.profilePage} messagePage={state.messagePage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}