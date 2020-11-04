import React from 'react';
const {Provider,Consumer} = React.createContext();
//ThemeContext.Provider & ThemeContext.Consumer

class ThemeContextProvider extends React.Component{
    state = {
        theme:"light"
    }

  toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light",
            }
        })
    }
    render(){
        return(
            <Provider value={{
                theme: this.state.theme,
                toggleTheme: this.toggleTheme
                }}>
                {this.props.children}
                {/* <button onClick={this.toggleTheme}>Switch theme</button> */}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};