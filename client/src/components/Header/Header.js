import './Header.css'
export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="logo-name-wrapper">
                    <div className="pizza-logo"></div>
                    <p className='name'>Pizza <span>HUB</span></p>
                </div>
                <nav className='navigation'>
                    <ul role="list">
                    <li className='link-nav'>
                            <a>Home</a>
                        </li>
                        <li className='link-nav'>
                            <a>All Repo's</a>
                        </li>
                        <li className='link-nav'>
                            <a>My Repo's</a>
                        </li>
                        <li className='link-nav'>
                            <a>Add Pizza</a>
                        </li>
                        <li className='link-nav'>
                            <a>Register</a>
                        </li>
                        <li className='link-nav'>
                            <a>Login</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className='top-img'>
                    <div className="waviy">
                        <span style={{ "--i": 1 }}>c</span>
                        <span style={{ "--i": 2 }}>o</span>
                        <span style={{ "--i": 3 }}>m</span>
                        <span style={{ "--i": 4 }}>m</span>
                        <span style={{ "--i": 5 }}>i</span>
                        <span style={{ "--i": 6 }}>t</span>
                        <span className='hashtag' style={{ "--i": 7 }}>#</span>
                        <span style={{ "--i": 8 }}>y</span>
                        <span style={{ "--i": 9 }}>o</span>
                        <span style={{ "--i": 10 }}>u</span>
                        <span style={{ "--i": 11 }}>r</span>
                        <span className='hashtag' style={{ "--i": 12 }}>#</span>
                        <span style={{ "--i": 13 }}>p</span>
                        <span style={{ "--i": 14 }}>i</span>
                        <span style={{ "--i": 15 }}>z</span>
                        <span style={{ "--i": 16 }}>z</span>
                        <span style={{ "--i": 17 }}>a</span>
                    </div>
    
            </section>
        </>
    )
}