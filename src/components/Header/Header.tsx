import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {Reddit} from "@mui/icons-material";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.section}>
                <Reddit fontSize={"large"}/>
                <div className={s.item}>
                    <NavLink to="/profile"
                             className={pressed => pressed.isActive ? s.active : s.link}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/messages"
                             className={pressed => pressed.isActive ? s.active : s.link}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users"
                             className={pressed => pressed.isActive ? s.active : s.link}>Users</NavLink>
                </div>
            </div>
            <div className={s.section}>
                <div className={s.item}>
                    <NavLink to="/logIn"
                             className={pressed => pressed.isActive ? s.active : s.link}>Log in</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings"
                             className={pressed => pressed.isActive ? s.active : s.link}>Settings</NavLink>
                </div>
            </div>
        </div>
    );
};