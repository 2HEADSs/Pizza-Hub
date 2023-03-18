import { Link } from 'react-router-dom'
import './Login.css'
export const Login = () => {
    return (
        <div className="login-form-wrap">
            <h2>Login</h2>
            <form className="login-form">
                <input type="text" className="username" name="username" placeholder="Username" required />
                <input type="password" className="password" name="password" placeholder="Enter your password" />
                <input type="submit" className="login" value="Login" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Do not have an account? <Link className='link-to-register' to="/register">Register</Link></p>
            </div>
        </div>
    )
}



