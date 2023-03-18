import './Login.css'
export const Login = () => {
    return (
        <div className="login-form-wrap">
            <h2>Login</h2>
            <form className="login-form">
                <input type="text" className="username" name="username" placeholder="Username" required />
                <input type="email" className="email" name="email" placeholder="Email Address" required />
                <input type="submit" className="login" value="Login" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Already have account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    )
}