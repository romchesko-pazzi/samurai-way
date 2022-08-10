import React, {ChangeEvent, useEffect, useState} from 'react';

type EditableSpanPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

export const EditableSpanHooks: React.FC<EditableSpanPropsType> = (props) => {
    const {status, updateUserStatusTC} = props;

    const [area, setTextArea] = useState('span');
    const [localStatusValue, setLocalStatusValue] = useState(status);

    useEffect(() => {
        setLocalStatusValue(status);
    }, [status])
    console.log(status)
    const changeToInput = () => {
        setTextArea('input');
    }
    const changeToSpan = () => {
        setTextArea('span');
        updateUserStatusTC(localStatusValue);
    }
    const setValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatusValue(e.currentTarget.value);
    }

    return (
        <div>
            {area === 'span'
                ? <span onDoubleClick={changeToInput}>{status || "-----"}</span>
                : <input autoFocus onBlur={changeToSpan}
                         onChange={setValueHandler}
                         value={localStatusValue}/>
            }
        </div>
    );
}
