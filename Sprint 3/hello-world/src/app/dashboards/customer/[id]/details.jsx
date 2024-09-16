'use client';
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function Details({id}) {
    const {data, error, isLoading} = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher)
    console.log({data, error, isLoading});
    return (
        <p>
          Usuario: {id}<br/>
        </p>
    )
}