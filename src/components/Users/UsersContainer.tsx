import {connect} from "react-redux";
import {
    choosePageThunkCreator,
    followThunkCreator,
    getUsersThunkCreator,
    unfollowThunkCreator
} from "../../store/UsersActions";
import {RootStateType} from "../../store/store";
import React from "react";
import {UsersPresent} from "./UsersPresent";
import {Preloader} from "../Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFollowed,
    getIsLoading,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../store/users-selectors";

export type UsersPropsType = MapDispatchToPropsType & UsersPageType;

export type UserType = {
    id: string
    name: string
    status: string
    location: { city: string, country: string }
    photos: { small: string, large: string }
    followed: boolean
}

export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    isLoading: boolean
    isFollowed: Array<string>
}

type MapDispatchToPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    choosePageThunkCreator: (pageNumber: number, pageSize: number) => void
    unfollowThunkCreator: (userID: string) => void
    followThunkCreator: (userID: string) => void
}

const mapStateToProps = (state: RootStateType): UsersPageType => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        isFollowed: getIsFollowed(state),
    }
}


export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    choosePage = (pageNumber: number) => {
        this.props.choosePageThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Preloader/> : ""}
                <UsersPresent
                    currentPage={this.props.currentPage}
                    choosePage={this.choosePage}
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    isFollowed={this.props.isFollowed}
                    unfollowTC={this.props.unfollowThunkCreator}
                    followTC={this.props.followThunkCreator}
                />
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersThunkCreator,
        choosePageThunkCreator,
        unfollowThunkCreator,
        followThunkCreator,
    }),
    withAuthRedirect,)
(UsersContainer);