import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionType, followAC, setUsersAC} from "../../store/UsersActions";
import {Dispatch} from "redux";
import {RootStateType} from "../../store/store";

export type UserType = {
    id: string
    isFriend: boolean
    name: string
    status: string
    location: { city: string, country: string }
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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);