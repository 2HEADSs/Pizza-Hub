import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Login.css';
import { authLogin } from '../../services/authService';

export const Login = () => {
    const [loginFormData, setLogin] = useState({
        email: '',
        password: ''
    });

    const loginHandler = async (e) => {
        e.preventDefault();
        const data = await authLogin(loginFormData);
        console.log(data);
        setLogin({
            email: '',
            password: ''
        })
        //TODO NAVIGATE 
    };

    const addLoginData = (e) => {
        setLogin({ ...loginFormData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-form-wrap">
            <h2>Login</h2>
            <form className="login-form" onSubmit={loginHandler}>
                <input
                    type="text"
                    className="email"
                    name="email"
                    placeholder="Email"
                    value={loginFormData.email}
                    onChange={addLoginData}
                />
                <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Enter your password"
                    value={loginFormData.password}
                    onChange={addLoginData}
                />
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



