import './Header.css'
export const Header = () => {
    return (
        <header className='header'>
            <div className="logo-name-wrapper">
                <div className="pizza-logo"></div>
                <p className='name'>Pizza <span>HUB</span></p>
            </div>
            <nav className='navigation'>
                <ul role="list">
                    <li className='link-nav'>
                        <a>ЗА НАС</a>
                    </li>
                    <li className='link-nav'>
                        <a>ФОРУМ</a>
                    </li>
                    <li className='link-nav'>
                        <a>БЛОГ</a>
                    </li>
                    <li className='link-nav'>
                        <a>КОНТАКТИ</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}