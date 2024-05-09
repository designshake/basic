import React, { useState } from "react";

//constants > index.js에 데이타를 다 모아놓고 거기서 불러온다.
import { headerNav } from "../constants"

//menu.js 이미 작성.
const Header = () => {
    const [show, setShow] = useState(false);
    
    const toggleMenu = () => {
        //alert('dd')
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
                {/* `` backtick 억음부호  show 가 붙거나 show가 붙지 않거나. true면 show가 붙고 아니라면
                아무것도 붙지 않게.*/}
                <nav 
                    className={`header__nav ${show ? "show" : ""}`} 
                    role="navigation" 
                    aria-label="메인메뉴"
                >
                
                    <ul>
                        {/*key는 index값 5번을 반복해야 해서 */}
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
                    // ? show 라면 true : 그게 아니라면 false
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