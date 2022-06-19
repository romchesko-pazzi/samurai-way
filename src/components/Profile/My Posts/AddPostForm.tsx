import React from 'react';
import s from "./MyPosts.module.css";
import {SubmitHandler, useForm} from "react-hook-form";

type FormInputs = {
    newPostText: string
}

type AddPostPropsType = {
    addPost: (newPostText: string) => void
}

const AddPostForm: React.FC<AddPostPropsType> = (props) => {
    const {addPost} = props
    const {handleSubmit, register, reset} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const {newPostText} = data;
        addPost(newPostText);
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