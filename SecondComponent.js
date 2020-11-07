import React from 'react';
import useCounter from './useCounter';

function SecondComponent() {
    const [ number, plus,minus] = useCounter();

    return (
    <div>
        <p>This is the num: {number}</p>
        <button onClick={minus}>Minus-</button>
        <button onClick={plus}>Plus+</button>
    </div>
    )
}

export default SecondComponent;
