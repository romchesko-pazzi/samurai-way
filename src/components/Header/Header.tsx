import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <NavLink to="/home" className={pressed => pressed.isActive ? s.active : s.link}>Home</NavLink>
            </div>
            <div>
                <NavLink to="/messages" className={pressed => pressed.isActive ? s.active : s.link}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/friends" className={pressed => pressed.isActive ? s.active : s.link}>Friends</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={pressed => pressed.isActive ? s.active : s.link}>Settings</NavLink>
            </div>
        </div>
    );
};