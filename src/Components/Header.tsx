import logo from 'Img/logo.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="flexbox">
                <img src={logo} alt="My unpslash" className="header__logo" />
                <input type="text" className="header__search" placeholder="Search by name" />
            </div>
            <button className="header__add-btn">Add photo</button>
        </header>
    );
}
