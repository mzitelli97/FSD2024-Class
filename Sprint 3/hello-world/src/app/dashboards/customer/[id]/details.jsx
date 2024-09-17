'use client';
import useSWR from "swr";
import { WebVitals } from "@/components/web-vitals";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function Details({id}) {
    const {data, error, isLoading} = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher)
    console.log({data, error, isLoading});
    return (
      <WebVitals>
        <p>
          Usuario: {id}<br/>
        </p>
      </WebVitals>
    )
}