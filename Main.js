import React from 'react';
import UserNameContext from './userNameContext';

function Main() {
        return(
            <UserNameContext.Consumer>
                {(username) => {
                    <main>
                     <p className="main">No new notifications, {username}! 🎉</p>
                 </main>
                }}
            </UserNameContext.Consumer>
        )
    }

// Main.contextType = UserNameContext;
export default Main;