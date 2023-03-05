import './Footer.css'
export const Footer = () => {
    return (
        <footer className='footer'>
            <p>P@vel Dimitrov personal REACT SPA</p>
            <div className="icons">
                <a><i className="fa-solid fa-envelope"></i></a>
                <a><i className="fa-brands fa-square-github"></i></a>
                <a><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    )
}