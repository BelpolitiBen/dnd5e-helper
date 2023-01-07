import React from 'react';
// import { json } from 'stream/consumers';

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

type Props = {
  params: { endpoint: string };
};

const Page = async (props: Props) => {
  const { endpoint } = props.params;
  const data = await getData(endpoint);

  return (
    <main>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </main>
  );
};

export default Page;
