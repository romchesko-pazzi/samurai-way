import React from 'react';
import {ProfileInfo, UserProfileType} from "./ProfileInfo";
import {PostsType} from "./ProfileContainer";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";
import {updateUserStatusTC} from "../../store/ProfileAndMessagesActions";

type ProfilePresentType = {
    posts: Array<PostsType>
    newPostText: string
    userProfile: UserProfileType
    status: string
    updateUserStatusTC: (status: string) => void
}


export const ProfilePresent: React.FC<ProfilePresentType> = (props) => {

    const {userProfile, status, updateUserStatusTC} = props;

    return (
        <div>
            <ProfileInfo updateUserStatusTC={updateUserStatusTC} status={status} userProfile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};