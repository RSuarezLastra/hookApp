import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'raulastra360',
        email: 'raul.slastra@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    // useEffect(() => {
    //     console.log('useEffect called');
    // }, []);

    // useEffect(() => {
    //     console.log('formstate Changed');
    // }, [formState]);

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                name='username'
                className='form-control'
                placeholder='Username'
                value={username}
                onChange={onInputChange}
            />
            { formState.username === 'raulastra360' && <Message /> }

            <input
                type="text"
                name='email'
                className='form-control mt-4'
                placeholder='email@gmail.com'
                value={email}
                onChange={onInputChange}
            />
        </>

    )
}
