import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {RootStateType} from "../store/store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class AuthRedirectComponent extends React.Component<MapStateToPropsType> {
        render() {
            const {isAuth, ...restProps} = this.props;

            if (!isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...restProps as T}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
}
