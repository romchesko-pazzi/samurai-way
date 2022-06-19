import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {Reddit} from "@mui/icons-material";
import {PropsType} from "./HeaderContainer";
import {logOut} from "../../store/reducers/AuthReducer";
import {useAppDispatch} from "../../store/hooks";

type HeaderPropsType = {
    authData: PropsType
}

export const Header: React.FC<HeaderPropsType> = (props) => {

    const {authData} = props;
    const dispatch = useAppDispatch();
    const logOutHandler = () => {
        dispatch(logOut());
    }

    return (
        <div className={s.header}>
            <div className={s.section}>
                <Reddit fontSize={"large"}/>
                <div className={s.item}>
                    <NavLink to="/profile"
                             className={pressed => pressed ? s.active : s.link}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/messages"
                             className={pressed => pressed ? s.active : s.link}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users"
                             className={pressed => pressed ? s.active : s.link}>Users</NavLink>
                </div>
            </div>
            <div className={s.section}>
                {
                    authData.isAuth
                        ? <div className={s.login}>
                            <div>{authData.login}</div>
                            <div>{authData.email}</div>
                            <button onClick={logOutHandler}>Log out</button>
                        </div>
                        : <div className={s.item}>
                            <NavLink to="/login"
                                     className={pressed => pressed ? s.active : s.link}>Log in</NavLink>
                        </div>
                }

                <div className={s.item}>
                    <NavLink to="/settings"
                             className={pressed => pressed ? s.active : s.link}>Settings</NavLink>
                </div>
            </div>
        </div>
    );
};