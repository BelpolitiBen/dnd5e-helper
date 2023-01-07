import React from 'react';
import { useSearchParams } from 'next/navigation';
import { json } from 'stream/consumers';

// type Props = {
//   ability: string;
// };

async function getData(endpoint: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DND_API_URL}${endpoint}`);
  // The return value is not serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const searchParams = useSearchParams();

  const endpoint = searchParams.get('endpoint');

  const data = await getData(endpoint as string);

  return <main>{JSON.stringify(data, null, 4)}</main>;
}
