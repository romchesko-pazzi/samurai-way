import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, followAC, setUsersAC} from "../../store/UsersActions";
import {Dispatch} from "redux";
import {RootStateType} from "../../store/store";
import {UsersClass} from "./UsersClass";

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
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapDispatchToPropsType & UsersPageType;


const mapStateToProps = (state: RootStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);