import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch} from "react-redux";
import {sendNewMessageAC} from "../../store/ProfileAndMessagesActions";

type FormInputs = {
    newMessageText: string
}

const AddPostForm = () => {
    const dispatch = useDispatch();
    const {handleSubmit, register, reset} = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        const {newMessageText} = data;
        dispatch(sendNewMessageAC(newMessageText));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea {...register("newMessageText")}/>
                <button>send message</button>
            </div>
        </form>
    )
};

export default AddPostForm;