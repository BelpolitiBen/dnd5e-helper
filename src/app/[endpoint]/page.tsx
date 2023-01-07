import React from 'react';
import type { ApiReferenceList } from '../../utils/types';

async function getData(endpoint: string): Promise<ApiReferenceList> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_DND_API_URL}${endpoint}`
    );
    // The return value is not serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page({
    params,
    searchParams,
}: {
    params: { endpoint: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const data = await getData(params.endpoint);

    return <main>hi {JSON.stringify(data)}</main>;
}

/* const data = await getData(
        searchParams?.key?.length
            ? `${params.endpoint}/${searchParams.key}`
            : params.endpoint
    ); */
