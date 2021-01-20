import React from 'react';

// className={`${classes.hover}`}

const Button = (props) => {
    const { text, disabled } = props;
    const handleClick = (event) => {
        event.preventDefault();
        if(!disabled) {
            console.log('ok');
        }
    };
    return (
        <button className={`button ${disabled ? 'disabled' : ''}`} onClick={e => e.preventDefault()}>{text}</button>
    )
};
export default Button;