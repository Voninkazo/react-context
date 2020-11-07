import React from "react";
import UserNameContext from './userNameContext';
function Header() {
        return (
            <UserNameContext.Consumer>
                {username => (
                     <header>
                        <p>Welcome, {username}!</p>
                    </header>
                )}
            </UserNameContext.Consumer>
        )
}

// Header.contextType = UserNameContext;
export default Header

