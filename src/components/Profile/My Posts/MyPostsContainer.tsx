import {ChangeEvent} from 'react';
import {RootStateType} from "../../../store/custom-redux";
import {ActionType, addPostAC, updatePostTextAC} from "../../../store/actions";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";

// До 45 выпуска. 45-> переход на connect()
// export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
//
//     const {profilePage} = props;
//     const dispatch = useDispatch();
//
//     const mappedPosts = profilePage.posts.map(p => <div key={p.id}>{p.message}</div>)
//
//     const onClickHandler = () => {
//         dispatch(addPostAC())
//     }
//
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         dispatch(updatePostTextAC(e.currentTarget.value))
//     }
//     return (
//         <MyPosts onChangeHandler={onChangeHandler}
//                  newPostText={profilePage.newPostText}
//                  onClickHandler={onClickHandler}
//                  mappedPosts={mappedPosts}
//         />
//     );
// };

const mapStateToProps = (state: RootStateType) => {
    return {
        mappedPosts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updatePostTextAC(e.currentTarget.value))
        },
        onClickHandler: () => {
            dispatch(addPostAC())
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)