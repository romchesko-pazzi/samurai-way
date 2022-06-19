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
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid}
    } = useForm<FormInputs>({mode: "onBlur"});

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const {newPostText} = data;
        addPost(newPostText);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.field}>
                <textarea {...register("newPostText",
                    {
                        required: "post is required",
                        maxLength: {
                            value: 20,
                            message: "Too many symbols",
                        }
                    })}
                          placeholder={"Your new post"}
                          maxLength={21}
                />
                <div className={s.btn}>
                    <button disabled={!isValid}>add post</button>
                </div>
            </div>
            <div className={s.error}>
                {errors.newPostText && errors.newPostText.message}
            </div>
        </form>
    )
};

export default AddPostForm;

// formState - хранятся ошибки