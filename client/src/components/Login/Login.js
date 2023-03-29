import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import './Login.css';
import { authLogin } from '../../services/authService';

export const Login = () => {
    const [loginFormData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        serverError: false
    });

    const navigate = useNavigate();
    const { setUserSession } = useContext(AuthContext);

    const loginHandler = async (e) => {
        e.preventDefault();
        if (Object.values(loginFormData).some(x => x === "") || Object.values(errors).some(x => x === true)) {
            setErrors(state => ({ ...state, ["serverError"]: 'Fill all fields!' }));
            return;
        }
        const responseData = await authLogin(loginFormData);
        if (responseData?.message) {
            return setErrors({ ...errors, serverError: responseData.message })

        };

        if (responseData?._id) {
            setUserSession(responseData)
            navigate('/');
        }


    };

    const addLoginData = (e) => {
        setLoginData({ ...loginFormData, [e.target.name]: e.target.value });
        setErrors(state => ({ ...state, [e.target.name]: false, ["serverError"]: false }));
    };

    const onBlurHandler = (e) => {
        if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!e.target.value.match(emailRegex)) {
                setErrors(state => ({ ...state, [e.target.name]: true }));
            }
        } else if (e.target.name === 'password' &&
            (e.target.value.length < 3 || e.target.value.length > 10)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))

        }
    };

    return (
        <div className="login-form-wrap">
            <h2>Login</h2>

            <form className="login-form" onSubmit={loginHandler}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    className="email"
                    name="email"
                    placeholder="Email"
                    value={loginFormData.email}
                    onChange={addLoginData}
                    onBlur={onBlurHandler}
                />
                {errors.email && (
                    <p className='create-error'>Invalid email</p>
                )}
                
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Enter your password"
                    value={loginFormData.password}
                    onChange={addLoginData}
                    onBlur={onBlurHandler}
                />
                {errors.password && (
                    <p className='create-error'>Username must be between 3 and 10 characters!</p>
                )}
                {errors && (
                    <h2 className='create-error'>{errors.serverError}</h2>
                )}
                <input
                    type="submit"
                    className="login"
                    value="Login" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Do not have an account? <Link className='link-to-register' to="/register">Register</Link></p>
            </div>
        </div>
    )
}



