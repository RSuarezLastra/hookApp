import { useState } from 'react';
import {useCounter} from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const [show, setShow ] = useState(false)
    const {counter, increment} = useCounter();

    return (
        <>
        <div>Counter: <Small value={counter}/> </div>
        <hr />
        
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
