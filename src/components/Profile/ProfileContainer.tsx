import React from "react";
import {ProfilePresent} from "./ProfilePresent";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../store/ProfileAndMessagesActions";
import {UserProfileType} from "./ProfileInfo";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;
export type ProfilePropsType = MapDispatchToPropsType & ProfilePageType
export type ProfilePageType = {
    status: string
    userProfile: UserProfileType
}

type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateUserStatusTC: (status: string) => void
}

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);
    }

    render() {
        return (
            <div>
                <ProfilePresent
                    status={this.props.status}
                    userProfile={this.props.userProfile}
                    updateUserStatusTC={this.props.updateUserStatusTC}
                />
            </div>
        )
    }
}

export const mapStateToProps = (state: RootStateType): ProfilePageType => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {getUserProfileTC, getUserStatusTC, updateUserStatusTC}),
    withRouter,
    withAuthRedirect)
(ProfileContainer);