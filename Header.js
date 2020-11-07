import React, { useContext } from 'react';
import {ThemeContext}  from './themeContext';

function Header() {
	// const context = useContext(ThemeContext);the same
	const {theme} = useContext(ThemeContext);
		return (
        		<header className={`${theme}-theme`}>
				    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
				</header>
		)
	}


// Header.contextType = ThemeContext

export default Header;
