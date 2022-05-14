import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {setAuthUserData} from "../../store/AuthReducer";

export type PropsType = AuthDataType & MapDispatchToPropsType;

export type AuthDataType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: RootStateType): AuthDataType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header authData={this.props}/>
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

