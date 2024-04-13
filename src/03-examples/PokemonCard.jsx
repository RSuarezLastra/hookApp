import { useRef, useLayoutEffect, useState } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });
    const divRef = useRef();

    useLayoutEffect(() => {
        const {height, width} = divRef.current.getBoundingClientRect();
        setBoxSize({height , width})

    }, [])

    return (
        <section style={{ height: 100 }}>
            <h3><span>#{id}</span> - {name}</h3>

            <div ref={divRef} style={{ display: 'flex' }}>
                {
                    sprites.map((sprite, i) => (
                        <img key={i} src={sprite} alt={sprite} />
                    ))
                }
                <code> {JSON.stringify(boxSize)}</code>
                
            </div>
        </section>
    )
}