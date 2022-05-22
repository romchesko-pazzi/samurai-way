import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {getAuthUserDataTC} from "../../store/AuthReducer";

export type PropsType = AuthDataType & MapDispatchToPropsType;

export type AuthDataType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    getAuthUserDataTC: any
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
        this.props.getAuthUserDataTC();
    }

    render() {
        return <Header authData={this.props}/>
    }
}

export default connect(mapStateToProps, {
    getAuthUserDataTC
})(HeaderContainer);

