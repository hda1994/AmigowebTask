import React, { Fragment, useState } from 'react';
import classes from './input.module.css';

// className={`${classes.hover}`}

const Input = (props) => {
    // const [ error, setError ] = useState(false);
    const { lableText, placeholderText, value, onChange, isError, setError, regexp } = props;

    const handleChange = ( event ) => {
        if(regexp.test(event.target.value) || event.target.value === '') {
            setError(false);
        }
        else {
            setError(true);
        }
        onChange(event.target.value);
    };

    return (
        <div>
            <div><lable>{lableText}</lable></div>
            <input className={`input`}
                   type='text'
                   placeholder={placeholderText}
                   value={value}
                   onChange={handleChange}/>
            {isError ? <div className={`error_message`}>Введено не корректное значение</div> : null }
        </div>
    )
};

export default Input;