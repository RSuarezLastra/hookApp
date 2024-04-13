import { useState, useEffect } from "react";

const localCache = {};

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasErrors: false,
        error: null
    });

    useEffect(() => {
        getFetch();

    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasErrors: false,
            error: null
        });
    }

    const getFetch = async () => {

        if (localCache[url]) {
            console.log(localCache);
            setState({
                data: localCache[url],
                isLoading: false,
                hasErrors: false,
                error: null
            })
            return;
        }

        setLoadingState();

        const resp = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 1000))

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasErrors: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }

        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasErrors: false,
            error: null
        });

        //manejo del caché
        localCache[url] = data;

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasErrors: state.hasErrors,
        error: state.error
    }

}