import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginTC} from "../../store/reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/reducers/hooks";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth);
    const dispatch = useAppDispatch();
    console.log(isAuth)
    const {handleSubmit, register, reset} = useForm<FormDataType>();

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        const {email, password, rememberMe} = data;
        dispatch(loginTC(email, password, rememberMe));
        reset();
    }

    if (isAuth) {
        return <Redirect to={"/profile/"}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type={"email"}{...register("email")}/>
            </div>
            <div>
                <input type={"password"} {...register("password")}/>
            </div>
            <div>
                <input type={"checkbox"} {...register("rememberMe")}/>
            </div>
            <div>
                <button>
                    log in
                </button>
            </div>
        </form>
    );
};
