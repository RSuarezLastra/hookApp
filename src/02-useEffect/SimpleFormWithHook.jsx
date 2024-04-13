import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const SimpleFormWithHook = () => {

    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: '',
        email: '',
        password: '',
    })

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


            <input
                type="text"
                name='email'
                className='form-control mt-4'
                placeholder='email@gmail.com'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                name='password'
                className='form-control mt-4'
                placeholder='password'
                value={password}
                onChange={onInputChange}
            />

            <button
                className='btn btn-primary mt-4'
                onClick={onResetForm} >
                Borrar
            </button>
        </>

    )
}
