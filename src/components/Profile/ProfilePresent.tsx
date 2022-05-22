import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {ProfilePageType, ProfilePropsType} from "./ProfileContainer";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";


export const ProfilePresent: React.FC<ProfilePageType> = (props) => {

    const {userProfile} = props;
    return (
        <div>
            <ProfileInfo userProfile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};