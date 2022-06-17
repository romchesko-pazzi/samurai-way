import React from 'react';
import s from "./MyPosts.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {addPostAC} from "../../../store/ProfileAndMessagesActions";
import {useAppDispatch} from "../../../store/reducers/hooks";

type FormInputs = {
    newPostText: string
}


const AddPostForm = () => {
    const dispatch = useAppDispatch();
    const {handleSubmit, register, reset} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const {newPostText} = data;
        dispatch(addPostAC(newPostText));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.input}>
                <textarea {...register("newPostText")}/>
                <button>add post</button>
            </div>
        </form>
    )
};

export default AddPostForm;