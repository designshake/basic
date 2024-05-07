import React, { useState } from "react";

const headerNav = [
    {
        title:'intro',
        url:'#intro'
    },
    {
        title:'skill',
        url:'#skill'
    },
    {
        title:'SitSSSe',
        url:'#site'
    },
    {
        title:'porddtfolio',
        url:'#port'
    },
    {
        title:'contact',
        url:'#contact'
    }
];


const Header = () => {
    const [show, setShow] = useState(false);
    
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="/">portfolio<em>React</em></a>
                    </h1>
                </div>
                {/* `` backtick 억음부호 */}
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인메뉴"
                >
                
                    <ul>
                        {/*key는 index값 */}
                        {headerNav.map((nav, key) => (
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={show ? "true" : "false"} 
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;