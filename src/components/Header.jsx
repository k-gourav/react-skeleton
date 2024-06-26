import React, { useState } from "react";

const Header = ({ handleInputText }) => {
    const output = (event) => {
        handleInputText(event.target.value)
    }

    return (
        <header>
            <div className="header-element">
                <div className="header-input">
                    <input type="text" name="nav-input" placeholder="Input" onChange={output} />
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                </div>
                <div className="nav-logo">
                    <nav className="nav-items">
                        <ul>
                            <li><button className="nav-btn">Btn</button></li>
                            <li><button className="nav-btn">Btn</button></li>
                            <li><button className="nav-btn">Btn</button></li>
                        </ul>
                    </nav>
                    <div className="logo">
                        <p>LOGO</p>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;