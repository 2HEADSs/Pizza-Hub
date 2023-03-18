import './Register.css'

export const Register = () => {
    return (
        <div id="login-form-wrap">
            <h2>Register</h2>
            <form id="login-form">
                <p>
                    <input type="text" id="username" name="username" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
                </p>
                <p>
                    <input type="email" id="email" name="email" placeholder="Email Address" required/><i class="validation"><span></span><span></span></i>
                </p>
                <p>
                    <input type="submit" id="login" value="Register"/>
                </p>
            </form>
            <div id="already-have-account-wrapper">
            {/* <div id="create-account-wrap"> */}
                <p>Already have account? <a href="#">Sign Up</a></p>
                </div>
            </div>

            )
} 