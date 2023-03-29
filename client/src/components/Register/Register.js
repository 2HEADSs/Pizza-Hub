import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';

import './Register.css';
import { AuthContext } from '../../context/AuthContext';
import { authRegister } from '../../services/authService';


export const Register = () => {
    const [registerFormData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        repass: ''
    });
    const [errors, setErrors] = useState({
        email: false,
        username: false,
        password: false,
        repass: false,
        serverError: false
    });

    const navigate = useNavigate();
    const { setUserSession } = useContext(AuthContext);

    const registerHandler = async (e) => {
        e.preventDefault();
        if (Object.values(registerFormData).some(x => x === "") && Object.values(errors).some(x => x === false)) {
            setErrors(state => ({ ...state, ["serverError"]: 'Fill all fields!' }));
            return;
        }
        const responseData = await authRegister(registerFormData);
        if (responseData?.message) {
            return setErrors({ ...errors, serverError: responseData.message })
        };

        if (responseData?._id) {
            setUserSession(responseData)
            navigate('/');
        }
    };



    const addRegisterData = (e) => {
        setRegisterData({ ...registerFormData, [e.target.name]: e.target.value });
        setErrors(state => ({ ...state, [e.target.name]: false, ["serverError"]: false }));
    };

    const onBlurHandler = (e) => {
        if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!e.target.value.match(emailRegex)) {
                setErrors(state => ({ ...state, [e.target.name]: true }));
            }

        } else if (e.target.name === 'username' &&
            (e.target.value.length < 3 || e.target.value.length > 10)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'password' &&
            (e.target.value.length < 3 || e.target.value.length > 10)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'repass' &&
            registerFormData.password !== e.target.value) {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        }
    };

    //TODO hide register input if there are errors or empty fields
    return (
        <div className="register-form-wrap">
            <h2>Register</h2>
            <form className="register-form" onSubmit={registerHandler}>
                <input
                    type="email"
                    className="email"
                    name="email"
                    placeholder="Email Address"
                    value={registerFormData.email}
                    onChange={addRegisterData}
                    onBlur={onBlurHandler}
                />
                {errors.email && (
                    <p className='create-error'>Invalid email</p>
                )}
                <input
                    type="text"
                    className="username"
                    name="username"
                    placeholder="Username"
                    value={registerFormData.username}
                    onChange={addRegisterData}
                    onBlur={onBlurHandler}
                />
                {errors.username && (
                    <p className='create-error'>Username must be between 3 and 10 characters!</p>
                )}
                <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Enter your password"
                    value={registerFormData.password}
                    onChange={addRegisterData}
                    onBlur={onBlurHandler}
                />
                {errors.password && (
                    <p className='create-error'>Password must be between 3 and 10 characters!</p>
                )}
                <input
                    type="password"
                    className="repass"
                    name="repass"
                    placeholder="Repeat your password"
                    value={registerFormData.repass}
                    onChange={addRegisterData}
                    onBlur={onBlurHandler}
                />

                {errors.repass && (
                    <p className='create-error'>Password dismatch!</p>
                )}

                {errors && (
                    <h2 className='create-error'>{errors.serverError}</h2>
                )}

                <input type="submit" className="register" value="Register" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Already have an account? <Link className='link-to-login' to="/login">Login</Link></p>
            </div>
        </div>
    )
} 