import { useState, useMemo } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('corrinedo proceso...');

    }

    return `${iterations} iteraciones realizadas`
}


export const MemorizeHook = () => {

    const [show, setShow] = useState(false)
    const { counter, increment } = useCounter(500);

    const memorized = useMemo(() => heavyProcess(counter), [counter])

    return (
        <>
            <div>Counter: <small>{counter}</small> </div>
            <hr />

            <h4>{memorized}</h4>

            <button className='btn btn-primary'
                onClick={() => increment()}>
                +1
            </button>

            <button className='btn btn-outline-primary'
                onClick={() => setShow(!show)}>
                show/hide {JSON.stringify(show)}
            </button>


        </>
    )
}
