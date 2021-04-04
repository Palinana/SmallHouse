import { useState, useEffect, useCallback } from "react";
import { server } from './server';

interface State<TData> {
    data: TData | null ; // data returned from api call | null before the call
}

export const useQuery = <TData = any> (query: string) => {
    const [state, setState] = useState<State<TData>>({data: null});

    // making fetch extractable from the Hook itself, that's why it's outside
    const fetch = useCallback(() => { // memoizes the function
        const fetchApi = async () => {
            const {data} = await server.fetch<TData>({ query });
            setState({ data });
        };

        fetchApi();
    }, [query]); // it's an outside value, use here as a dependency

    // runs when the component run for the first time
    useEffect(() => {
        fetch();
    },[fetch]);

    return { ...state, refetch: fetch };
};
