import './CreatePizza.css'
export const CreatePizza = () => {
    return (
        <div className="create-form-wrap">
            <h2>Create your precious </h2>
            <form className="create-form">
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