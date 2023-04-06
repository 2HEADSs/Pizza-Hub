import { Link } from 'react-router-dom';
import './Footer.css'
export const Footer = () => {
    return (
        <footer className='footer'>
            <p>P@vel Dimitrov personal REACT SPA</p>
            <div className="icons">
                <Link ><i className="fa-solid fa-envelope"> </i></ Link>
                <Link to="https://github.com/2HEADSs"><i className="fa-brands fa-square-github"></i></Link>
                <Link to="https://www.linkedin.com/in/pavel-dimitrov-b6a503229/"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
        </footer>
    )
}