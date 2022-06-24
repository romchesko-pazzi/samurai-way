import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {getAuthUserDataTC} from "../../store/reducers/AuthReducer";

export type PropsType = AuthDataType & MapDispatchToPropsType;

export type AuthDataType = {
    id: number | null,
    email: string,
    login: string,
    isAuth: boolean,
    error: string,
}

type MapDispatchToPropsType = {
    getAuthUserDataTC: () => void
}

const mapStateToProps = (state: RootStateType): AuthDataType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        error: state.auth.error,
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
    getAuthUserDataTC,
})(HeaderContainer);

