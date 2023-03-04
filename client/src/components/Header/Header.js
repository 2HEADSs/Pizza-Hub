import './Header.css'
export const Header = () => {
    return (
        <header>
        <div className="pizza-logo"></div>
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