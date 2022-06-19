import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from "./SendMessageForm.module.css";

type FormInputs = {
    newMessageText: string
}

type AddPostFormPropsType = {
    sendMessage: (newMessageText: string) => void
}

const AddPostForm: React.FC<AddPostFormPropsType> = (props) => {
    const {sendMessage} = props
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid},
    } = useForm<FormInputs>({mode: "onBlur"});

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const {newMessageText} = data;
        sendMessage(newMessageText)
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.field}>
                <textarea
                    {...register("newMessageText",
                        {
                            required: "message is required",
                            maxLength: {
                                value: 20,
                                message: "Too many symbols"
                            },
                        })}
                    maxLength={21}
                    placeholder={"Your message"}
                />
                <button disabled={!isValid} className={s.btn}>send message</button>
            </div>
            <div className={s.error}>
                {errors.newMessageText && errors.newMessageText.message}
            </div>
        </form>
    )
};

export default AddPostForm;