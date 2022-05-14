import React from 'react';
import loadingImage from "../../img/icons8-loading-circle.gif";

export const Preloader = () => {
    return (
        <div>
            <img src={loadingImage} alt={"load"}/>
        </div>
    );
};
