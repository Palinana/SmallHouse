interface Body <TVariables> {
    query: string;
    variables?: TVariables;  // ?: optional, for mutaions 
}

export const server = {
    fetch: async <TData = any, TVariables = any> (
        body: Body<TVariables>
    ) => { // if type doesn't provided, set to any
        const res = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return res.json() as Promise<{ data: TData }>; // fields in the returned promise
    }
};
