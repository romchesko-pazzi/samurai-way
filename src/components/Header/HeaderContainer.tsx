import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {setAuthUserData} from "../../store/AuthReducer";
import {authMe} from "../../api/api";

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
        authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header authData={this.props}/>
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

