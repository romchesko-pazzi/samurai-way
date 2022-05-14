import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";


export const ProfilePresent: React.FC<ProfilePropsType> = (props) => {

    const {userProfile} = props;
    return (
        <div>
            <ProfileInfo userProfile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};