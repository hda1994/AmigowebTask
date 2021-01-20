import React, { useState } from 'react';
import img from '../img/select_icon.png';
import classes from './select.module.css';
// className={`${classes.hover}`}

const Select = (props) => {
    const [ open, setOpen ] = useState(false);
    const [ focus, setFocus ] = useState(false);
    const { labelText, placeholderText, value, onChange, isError, setError, regexp, languagesArray = [] } = props;
    let mount = React.createRef();

    const handleOuterClick = (e) => {
        if(mount.current) {
            if(!mount.current.contains(e.target)) {
                setOpen(false);
                setFocus(false);
            }
        }
    };
    document.removeEventListener('click', handleOuterClick);
    document.addEventListener('click', handleOuterClick);

    const handleClickOption = ( event ) => {
        setOpen(false);
        onChange(event);
        setError(false);
    };
    const handleClickSelect = () => {
        setFocus(true);
        setOpen(!open);
    };

    return (
        <div>
            <div><label>{labelText}</label></div>
            <div ref={mount}
                 className={`${classes.select} ${focus ? classes.focus : ''}`}
            >
                <div className={classes.selected_option}
                     onClick={handleClickSelect}
                >
                    { value === '' ? placeholderText : value }
                </div>
                <div className={classes.select_icon}
                     onClick={handleClickSelect}
                >
                    <img src={img}/>
                </div>
                {open ? <div className={classes.options_wrapper}>
                    {languagesArray.map((elem, index) =>
                        <div key={index}
                             className={classes.option}
                             onClick={() => handleClickOption(elem)}
                        >
                            {elem}
                        </div>
                    )}</div> : null
                }
            </div>
        </div>
    )
};

export default Select;