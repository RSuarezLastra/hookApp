import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>CounterCustomHook</h1>

            <hr />
            <h2>{counter}</h2>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => decrement(10) }>
                -1
            </button>
            <button
                className='btn btn-primary'
                onClick={reset}>
                reset
            </button>
            <button
                className='btn btn-primary'
                onClick={() => increment(10)}
            >
                +1
            </button>
        </>
    )
}
