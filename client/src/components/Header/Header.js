import './Header.css'
export const Header = () => {
    return (
        <header className='header'>
            <div className="logo-name-wrapper">
                <div className="pizza-logo"></div>
                <p className='name'>Pizza <span>HUB</span></p>
            </div>
            <nav>
                <ul role="list">
                    <li>
                        <a>ЗА НАС</a>
                    </li>
                    <li>
                        <a>ФОРУМ</a>
                    </li>
                    <li>
                        <a>БЛОГ</a>
                    </li>
                    <li>
                        <a>КОНТАКТИ</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}