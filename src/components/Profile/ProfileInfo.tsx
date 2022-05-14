import React from 'react';
import s from "./Profile.module.css";
import {Preloader} from "../Preloader/Preloader";

type SocialNetworksType = {
    facebook: string
    website: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
    vk: string
}
type PhotosType = {
    small: string
    large: string
}
export type UserProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
    contacts: SocialNetworksType
}

type ProfileInfoPropsType = {
    userProfile: UserProfileType
}


export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const {userProfile} = props;
    if (!userProfile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div className={s.aboutInfo}>
                <div className={s.contacts}>
                    <div>{userProfile.contacts.github}</div>
                    <div>{userProfile.contacts.facebook}</div>
                    <div>{userProfile.contacts.website}</div>
                    <div>{userProfile.contacts.twitter}</div>
                    <div>{userProfile.contacts.instagram}</div>
                    <div>{userProfile.contacts.youtube}</div>
                    <div>{userProfile.contacts.vk}</div>
                    <div>{userProfile.contacts.mainLink}</div>
                </div>
                <div className={s.userName}>
                    {userProfile.fullName}
                </div>
                <div className={s.avatar}>
                    {
                        userProfile.photos.large === null
                            ? <img src="https://icon-library.com/images/avatar-png-icon/avatar-png-icon-13.jpg"
                                   alt="avatar"/>
                            : <img src={userProfile.photos.large}
                                   alt="avatar"/>
                    }
                </div>
                <div className={s.lookingForAJob}>
                    {userProfile.lookingForAJob
                        ? <div>I am looking for a job</div>
                        : <div>I am not looking for a job</div>
                    }
                </div>
                <div>
                    {userProfile.lookingForAJobDescription}
                </div>
                <div className={s.aboutMe}>
                    <span>{userProfile.aboutMe}</span>
                </div>
            </div>
        </div>
    )
};