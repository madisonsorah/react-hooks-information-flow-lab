import React from "react"

function Header({ onDarkModeClick, checkDarkMode }) {
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {checkDarkMode} Mode
        </button>
      </header>
    )
}

export default Header;