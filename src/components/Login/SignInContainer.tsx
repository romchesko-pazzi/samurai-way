import React from 'react';
import {SignIn} from "./SignIn";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {loginTC} from "../../store/reducers/AuthReducer";

export const SignInContainer = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuth);
    const signIn = (email: string, password: string, rememberMe: boolean) => {
        dispatch(loginTC(email, password, rememberMe));
    }
    return <SignIn isAuth={isAuth} signIn={signIn}/>
};
