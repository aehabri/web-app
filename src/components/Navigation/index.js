import React from 'react'
import './index.scss'
export default () => (
    <>
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">Menu</label>

        <div className="navigation__background"></div>

        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>Home Page</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Features</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Platforms</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Support</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Login</a></li>
                <li className="navigation__item"><a href="#" className="navigation__link"><span>06</span>Sign Up</a></li>
            </ul>
        </nav>
    </>
)