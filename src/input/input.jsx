import React from 'react';
import classes from './button.module.css';

// className={`${classes.hover}`}

const Button = (props) => {
    const { text, disabled } = props;
    return (
        <button className={`button ${disabled ? 'disabled' : ''}`}>{text}</button>
    )
};
export default Button;