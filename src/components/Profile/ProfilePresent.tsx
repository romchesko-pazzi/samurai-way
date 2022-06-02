import React from 'react';
import {ProfileInfo, UserProfileType} from "./ProfileInfo";
import {PostsType} from "./ProfileContainer";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";

type ProfilePresentType = {
    posts: Array<PostsType>
    newPostText: string
    userProfile: UserProfileType
}


export const ProfilePresent: React.FC<ProfilePresentType> = (props) => {

    const {userProfile} = props;

    return (
        <div>
            <ProfileInfo userProfile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};