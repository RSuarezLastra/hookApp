import { useState } from "react";
import { useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        () => {
            setCounter((value) => value + 1)
        },
        [],
    )


    // const increment = () => {
    //     setCounter(counter + 1)
    // }
    return (
        <>
            <h1>UseCallback Hook: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}
