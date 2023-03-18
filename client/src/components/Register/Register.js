import { Link } from 'react-router-dom'
import './Register.css'

export const Register = () => {
    return (
        <div className="register-form-wrap">
            <h2>Register</h2>
            <form className="register-form">
                <input type="text" className="username" name="username" placeholder="Username" />
                <input type="email" className="email" name="email" placeholder="Email Address" />

                <input type="password" className="password" name="password" placeholder="Enter your password" />
                <input type="password" className="repass" name="repass" placeholder="Repeat your password" />

                <input type="submit" className="register" value="Register" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Already have an account? <Link className='link-to-login' to="/login">Login</Link></p>
            </div>
        </div>
    )
} 