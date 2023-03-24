import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Register.css';
import { authRegister } from '../../services/authService';

export const Register = () => {
    const [registerFormData, setRegisterData] = useState({
        email: '',
        username: '',
        password: '',
        repass: ''
    });

    const registerHandler = async (e) => {
        e.preventDefault();
        //check if both password are same
        console.log(registerFormData);
        const responseData = await authRegister(registerFormData);
        console.log(responseData);

        
        setRegisterData({
            email: '',
            username: '',
            password: '',
            repass: ''
        })
    };

    const addRegisterData = (e) => {
        setRegisterData({ ...registerFormData, [e.target.name]: e.target.value })
    }


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
                />
                <input
                    type="text"
                    className="username"
                    name="username"
                    placeholder="Username"
                    value={registerFormData.username}
                    onChange={addRegisterData}
                />
                <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Enter your password"
                    value={registerFormData.password}
                    onChange={addRegisterData}
                />
                <input
                    type="password"
                    className="repass"
                    name="repass"
                    placeholder="Repeat your password"
                    value={registerFormData.repass}
                    onChange={addRegisterData}
                />

                <input type="submit" className="register" value="Register" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Already have an account? <Link className='link-to-login' to="/login">Login</Link></p>
            </div>
        </div>
    )
} 