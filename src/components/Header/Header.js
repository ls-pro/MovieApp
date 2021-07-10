import React from 'react'
import "./Header.css"

export const Header = () => {
    return (
        <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Movie Zone 🎥
    </span>
    )
};

export default Header;
