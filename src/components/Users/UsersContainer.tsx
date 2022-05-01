import {connect} from "react-redux";
import {ActionType, followAC, setCurrentPageAC, setUsersAC, setTotalUsersCountAC} from "../../store/UsersActions";
import {Dispatch} from "redux";
import {RootStateType} from "../../store/store";
import {Users} from "./Users";
import React from "react";
import axios from "axios";
import {UsersPresent} from "./UsersPresent";

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
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
}

const mapStateToProps = (state: RootStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        }

    }
}

export class UsersContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    choosePage = (m: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${m}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setCurrentPage(m);
        })

    }

    render() {

        return <UsersPresent
            currentPage={this.props.currentPage}
            choosePage={this.choosePage}
            users={this.props.users}
            follow={this.props.follow}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);