import { Link } from 'react-router-dom';
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

    const { setUserSession } = useContext(AuthContext)

    const loginHandler = async (e) => {
        e.preventDefault();
        const responseData = await authLogin(loginFormData);
        setUserSession(responseData)
        setLoginData({
            email: '',
            password: ''
        })
        //TODOerror handler
        //TODO NAVIGATE 
        // add token to state and context
    };

    const addLoginData = (e) => {
        setLoginData({ ...loginFormData, [e.target.name]: e.target.value })
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



