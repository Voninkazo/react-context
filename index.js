import React from "react"
import ReactDOM from "react-dom"
import App from "./App2";
import {ThemeContextProvider}  from './themeContext';
/**
 * Challenge: Set up context to save the user's username and pass it to anywhere that is currently hardcoding "Username".
 * 
 * Use the static class property `contextType` on any components that need to consume context.
 */
ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, document.getElementById("root"))



// import React from 'react';
// import ReactDOM from 'react-dom';
// import ThemeContext from './themeContext';

// import App from './App';

// // const ThemeContext = React.createContext();
// // ThemeContext.Provider & ThemeContext.Consumer

// ReactDOM.render(
//     <ThemeContext.Provider value={"light"}>
//         <App />
//     </ThemeContext.Provider>,
//     document.getElementById('root'));
