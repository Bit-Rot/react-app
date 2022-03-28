import React, { useEffect, useState } from 'react';

export function ApiTest() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("api")
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson.message));
    }, []);

    return (
        <div>{ data ? data : "Loading" }</div>
    );
}