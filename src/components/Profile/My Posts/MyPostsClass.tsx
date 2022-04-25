import React from 'react';
import s from "./MyPosts.module.css";
import {MapDispatchToPropsType, ProfilePage} from "./MyPostsContainer";

type MyPostsPropsType = MapDispatchToPropsType & ProfilePage


export class MyPostsClass extends React.Component<MyPostsPropsType> {
    constructor(props: MyPostsPropsType) {
        super(props);
    }

    render() {
        return (<div className={s.main}>
            <h3>My posts</h3>
            <div className={s.input}>
                <textarea onChange={(e) => this.props.onChangeHandler(e)} value={this.props.newPostText}/>
                <button onClick={this.props.onClickHandler}>add post</button>
            </div>
            <div className={s.boxForPosts}>
                {this.props.posts.map(p => <div key={p.id}>{p.message}</div>)}
            </div>
        </div>)
    }
}