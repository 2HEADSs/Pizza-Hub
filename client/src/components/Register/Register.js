import './Register.css'

export const Register = () => {
    return (
        <div className="register-form-wrap">
            <h2>Register</h2>
            <form className="register-form">
                <input type="text" className="username" name="username" placeholder="Username" required />
                <input type="email" className="email" name="email" placeholder="Email Address" required />
                <input type="submit" className="login" value="Register" />
            </form>
            <div className="already-have-account-wrapper">
                <p>Already have account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    )
} 