import { useFetch, useCounter } from '../hooks';
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasErrors, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>Informacion del pokemon</h1>

            {isLoading
                ? <LoadingMessage />
                : (
                    <PokemonCard
                        id={data?.id}
                        name={data?.name}
                        sprites={[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny
                        ]}
                    />
                )
            }

            <button
                className='btn btn-primary mt-4'
                onClick={() => counter > 0 ? decrement() : null}>
                Anterior
            </button>
            <button
                className='btn btn-primary mt-4'
                onClick={() => increment()}>
                Siguiente
            </button>
        </>
    )
}
