import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header-wrapper'>
            <header className='header'>
                <div className="logo-name-wrapper">
                    <div className="pizza-logo"></div>
                    <p className='name'>Pizza <span>HUB</span></p>
                </div>
                <nav className='navigation'>
                    <ul role="list">
                        <li className='link-nav'>
                            <Link className='link' to="/">Home</Link>
                        </li>
                        <li className='link-nav'>
                            <Link className='link' to="/catalog">All Repo's</Link>
                        </li>
                        <li className='link-nav'>
                            <Link className='link' to="/my-pizza">My Repo's</Link>
                        </li>
                        <li className='link-nav'>
                            <Link className='link' to="/create">Add Pizza</Link>
                        </li>
                        <li className='link-nav'>
                            <Link className='link' to="/register">Register</Link>
                        </li>
                        <li className='link-nav'>
                            <Link className='link' to="/login">Login</Link>
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
                    <span className='hashtag'>#</span>
                    <span style={{ "--i": 8 }}>y</span>
                    <span style={{ "--i": 9 }}>o</span>
                    <span style={{ "--i": 10 }}>u</span>
                    <span style={{ "--i": 11 }}>r</span>
                    <span className='hashtag'>#</span>
                    <span style={{ "--i": 13 }}>p</span>
                    <span style={{ "--i": 14 }}>i</span>
                    <span style={{ "--i": 15 }}>z</span>
                    <span style={{ "--i": 16 }}>z</span>
                    <span style={{ "--i": 17 }}>a</span>
                </div>

            </section>
        </div>
    );
};