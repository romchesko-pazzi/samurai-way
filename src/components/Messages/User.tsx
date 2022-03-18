import React from 'react';
import {NavLink} from "react-router-dom";

type UserType = {
    name: string,
    id: number,
}

export const User: React.FC<UserType> = (props) => {

    const {name, id} = props;
    const path = "/messages/" + id;

    return (
        <div>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};
