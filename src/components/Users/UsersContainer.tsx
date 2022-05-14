import {connect} from "react-redux";
import {follow, setCurrentPage, setLoadingIcon, setTotalUsersCount, setUsers} from "../../store/UsersActions";
import {RootStateType} from "../../store/store";
import React from "react";
import axios from "axios";
import {UsersPresent} from "./UsersPresent";
import {Preloader} from "../Preloader/Preloader";

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
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setLoadingIcon: (isLoading: boolean) => void
}

const mapStateToProps = (state: RootStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading,
    }
}

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setLoadingIcon(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then(response => {
                this.props.setLoadingIcon(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    choosePage = (m: number) => {
        this.props.setLoadingIcon(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${m}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setCurrentPage(m);
                this.props.setLoadingIcon(false);
            })
    }

    render() {
        return (
            <div>
                {this.props.isLoading ? <Preloader/> : ""}
                <UsersPresent
                    currentPage={this.props.currentPage}
                    choosePage={this.choosePage}
                    users={this.props.users}
                    follow={this.props.follow}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setLoadingIcon,
})(UsersContainer);