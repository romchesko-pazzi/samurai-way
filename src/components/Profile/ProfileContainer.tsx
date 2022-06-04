import React from "react";
import {ProfilePresent} from "./ProfilePresent";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import {getUserProfileTC} from "../../store/ProfileAndMessagesActions";
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
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    userProfile: UserProfileType
}

type MapDispatchToPropsType = {
    getUserProfileTC: any
}

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUserProfileTC(this.props.match.params.userId);
    }

    render() {
        return (
            <div>
                <ProfilePresent posts={this.props.posts}
                                userProfile={this.props.userProfile}
                                newPostText={this.props.newPostText}
                />
            </div>
        )
    }
}

export const mapStateToProps = (state: RootStateType): ProfilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        userProfile: state.profilePage.userProfile,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC,}),
    withRouter,
    withAuthRedirect)
(ProfileContainer);