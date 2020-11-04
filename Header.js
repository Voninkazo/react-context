import React from 'react';
import {ThemeContextConsumer}  from './themeContext';

// import React from "react";
// import UserNameContext from './userNameContext';
// function Header() {
//         return (
//             <UserNameContext.Consumer>
//                 {username => (
//                      <header>
//                         <p>Welcome, {username}!</p>
//                     </header>
//                 )}
//             </UserNameContext.Consumer>
//         )
// }

// // Header.contextType = UserNameContext;
// export default Header



function Header() {
		return (
            <ThemeContextConsumer>
                {context =>
                (<header className={`${context.theme}-theme`}>
				    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
			    </header>)}
            </ThemeContextConsumer >
		);
	}


// Header.contextType = ThemeContext

export default Header;
