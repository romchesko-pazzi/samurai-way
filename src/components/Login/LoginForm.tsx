import React from 'react';
import {Field, InjectedFormProps} from "redux-form";
import {FormDataType} from "./Login";

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" component="input" type="text"/>
            </div>
            <div>
                <Field name="password" component="input" type={"password"}/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/>
            </div>
            <div>
                <button>
                    log in
                </button>
            </div>
        </form>
    );
};
