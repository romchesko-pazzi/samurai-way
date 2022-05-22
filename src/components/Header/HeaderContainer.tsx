import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {setAuthUserDataTC} from "../../store/AuthReducer";

export type PropsType = AuthDataType & MapDispatchToPropsType;

export type AuthDataType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    setAuthUserDataTC: any
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
        this.props.setAuthUserDataTC();
    }

    render() {
        return <Header authData={this.props}/>
    }
}

export default connect(mapStateToProps, {
    setAuthUserDataTC
})(HeaderContainer);

