import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {sendNewMessageAC} from "../../store/ProfileAndMessagesActions";
import {useAppDispatch} from "../../store/reducers/hooks";

type FormInputs = {
    newMessageText: string
}

const AddPostForm: React.FC = () => {
    const dispatch = useAppDispatch();
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