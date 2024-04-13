import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese un nombre"
                className="form-control" />

            <button
                className="btn btn-primary mt-4"
                onClick={ handleClick}
            >
                Set focus
            </button>
        </>
    )
}
