import './App.css';
import React, { useState } from 'react';
import Button from "./button/button";
import Input from "./input/input";
import Select from "./select/select";
import Conditions from "./conditions/conditions";

const nameReg = /^[a-zA-Z]{1}[a-zA-Z -]*[a-zA-Z]{1}$/i;
const emailReg = /^([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i;
const phoneReg = /^(8|\+7){1}[\- ]?(\(?\d{3}\)?){1}[\- ]?(\d{1}([\- ]?)){7}$/i;
const languages = [ 'Язык', 'Русский', 'Английский', 'Китайский', 'Испанский' ];

function App() {
    
    const [ name, setName ] = useState('');
    const [ nameError, setNameError ] = useState(false);
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState(false);
    const [ phone, setPhone ] = useState('');
    const [ phoneError, setPhoneError ] = useState(false);
    const [ language, setLanguage ] = useState(0);
    const [ languageError, setLanguageError ] = useState(true);
    const [ conditions, setConditions] = useState(false);


    const disabled =  nameError
            || emailError
            || phoneError
            || languageError
            || !conditions
            || name === ''
            || email === ''
            || phone === '';

    return (
        <form className='main_wrapper'>
            <div>
                <h1 className='h1'>Регистрация</h1>
                <div>Уже есть аккаунт? <a>Войти</a></div>
            </div>
            <Input labelText={'Имя'}
                   placeholderText={'Введите Ваше имя'}
                   value={name}
                   onChange={setName}
                   isError={nameError}
                   setError={setNameError}
                   regexp={nameReg}
            />
            <Input labelText={'Email'}
                   placeholderText={'Введите ваш email'}
                   value={email}
                   onChange={setEmail}
                   isError={emailError}
                   setError={setEmailError}
                   regexp={emailReg}
            />
            <Input labelText={'Номер телефона'}
                   placeholderText={'Введите номер телефона'}
                   value={phone}
                   onChange={setPhone}
                   isError={phoneError}
                   setError={setPhoneError}
                   regexp={phoneReg}
            />
            <Select labelText={'Язык'}
                   placeholderText={'Язык'}
                   languagesArray={languages}
                   value={language}
                   onChange={setLanguage}
                   isError={languageError}
                   setError={setLanguageError}
            />
            <Conditions onChange={setConditions}
                        value={conditions}
            />
            <Button text={'Зарегистрироваться'} disabled={disabled}/>
        </form>
    );
}

export default App;
