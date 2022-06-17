import React from 'react';
import {reduxForm} from 'redux-form';
import {LoginForm} from "./LoginForm";
import {loginTC} from "../../store/reducers/AuthReducer";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: RootStateType): { isAuth: boolean } => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const Login = (props: { isAuth: boolean } & MapDispatchToPropsType) => {

    const {loginTC, isAuth} = props;

    if (isAuth) {
        return <Redirect to={"/profile/"}/>
    }

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData;
        loginTC(email, password, rememberMe);
    }

    return <LoginWithReduxForm onSubmit={onSubmit}/>
};


const LoginWithReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm);

export default connect(mapStateToProps, {loginTC})(Login);