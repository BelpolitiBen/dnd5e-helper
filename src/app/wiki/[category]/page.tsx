import React from 'react';
import CategoryList from '../../components/CategoryList';
// import { json } from 'stream/consumers';

const getData = async (category: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DND_API_URL}${category}`);
  // The return value is not serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest error.js Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const formatCategoryTitle = (category: string) => {
  let title = category.split('-').join(' ');
  title = title.substring(0, 1).toUpperCase() + title.substring(1);
  return title;
};

type Props = {
  params: { category: string };
};

const Page = async (props: Props) => {
  const { category } = props.params;
  const data = await getData(category);

  return (
    <main>
      <span className="title">{formatCategoryTitle(category)}</span>
      <CategoryList count={data.count} items={data.results} itemsPerPage={20} />
    </main>
  );
};

export default Page;
