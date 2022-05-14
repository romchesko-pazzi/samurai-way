import React from "react";
import {ProfilePresent} from "./ProfilePresent";
import {connect} from "react-redux";
import {RootStateType} from "../../store/store";
import axios from "axios";
import {setUserProfile} from "../../store/ProfileAndMessagesActions";
import {UserProfileType} from "./ProfileInfo";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

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
    setUserProfile: (profile: UserProfileType) => void
}


export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId || 22904;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <div>
                <ProfilePresent posts={this.props.posts}
                                userProfile={this.props.userProfile}
                                newPostText={this.props.newPostText}
                                setUserProfile={this.props.setUserProfile}/>
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

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter);