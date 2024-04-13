import { useState } from 'react'

export const CounterApp = () => {

    const [state, setCount] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h3>Counter app</h3>
            <h2>{counter1}</h2>
            <h2>{counter2}</h2>
            <h2>{counter3}</h2>

            <button
                className='btn btn-primary'
                onClick={() => setCount({
                    ...state,
                    counter1: counter1 +1
                })}>
                +1
            </button>
        </>
    )
}
