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
    const [errors, setErrors] = useState("")

    const { setUserSession } = useContext(AuthContext);
    const navigate = useNavigate();


    const loginHandler = async (e) => {
        e.preventDefault();
        const responseData = await authLogin(loginFormData);
        if (responseData?.message) {
            return setErrors(responseData.message)
        }
        if (responseData?._id) {
            setUserSession(responseData)
            navigate('/');
        }

        // setLoginData({
        //     email: '',
        //     password: ''
        // })

    };

    const addLoginData = (e) => {
        setLoginData({ ...loginFormData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-form-wrap">
            <h2>Login</h2>
            {errors && (
                <h2 className='create-error'>{errors}</h2>
            )}
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



