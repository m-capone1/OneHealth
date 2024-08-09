import React, { useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import avatar from '../../assets/images/avatar.png'

function Header() {
const [isloggedIn, setIsLoggedIn] = useState(false)
const location = useLocation();

const handleLogin = () => {
    setIsLoggedIn(prev => !prev)
}

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__logo">OneHealth</h1>
      </Link>
      <nav className="header__links">
        <Link to="/records"  className={location.pathname === '/' ? 'active' : ''}>Records</Link>
        <Link to="tracker" className={`header__link--tracker ${location.pathname === '/tracker' ? 'active' : ''}`}>Tracker</Link>
        <Link to="/chat" className={location.pathname === '/chat' ? 'active' : ''}>Chat</Link>
      </nav>
      <div className="header__account">
        <button onClick={handleLogin} className="header__button">{isloggedIn? "logout": "login"}</button>
        <img className="header__avatar" src={avatar} alt="avatar" />
      </div>
    </header>
  );
}

export default Header;
