import React from "react";
import useCounter from './useCounter';
import SecondComponent from './SecondComponent';
/**
 * Pop Quiz!
 * 
 * Refactor the class component below to use hooks instead
 */
function App() {
    const [count,increment] = useCounter(); 

        return (
            <div>
                <h1>The count is {count}</h1>
                <button onClick={increment}>Add 1</button>
                <SecondComponent/>
            </div>
        )
}
export default App;