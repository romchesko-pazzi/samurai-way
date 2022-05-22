import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {ProfilePageType} from "./ProfileContainer";
import {MyPostsContainer} from "./My Posts/MyPostsContainer";
import {Redirect} from "react-router-dom";


export const ProfilePresent: React.FC<ProfilePageType> = (props) => {

    const {userProfile, isAuth} = props;

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <ProfileInfo userProfile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
};