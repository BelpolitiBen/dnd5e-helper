'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  count: number;
  items: object[];
  itemsPerPage: number;
};

type PagerProps = {
  currentPage: number;
  lastPage: number;
  changePage: (value: number) => void;
};

const Pager = (props: PagerProps) => {
  const { currentPage, lastPage, changePage } = props;
  return (
    <div className="flex items-center justify-center gap-1 p-2">
      <button
        className="bg-gray-300 p-1"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>
      <span className="border-2 border-solid border-gray-500 p-1">
        {currentPage} / {lastPage}
      </span>
      <button
        className="bg-gray-300 p-1"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === lastPage}
      >
        next
      </button>
    </div>
  );
};

const CategoryList = (props: Props) => {
  const { count, items, itemsPerPage = 10 } = props;

  const enablePager = useRef(count > itemsPerPage);
  const lastPage = useRef(Math.ceil(count / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    enablePager.current = count > itemsPerPage;
    lastPage.current = Math.ceil(count / itemsPerPage);
  }, [count, itemsPerPage, items]);

  const changePage = (value: number) => {
    if (value < 1) value = 1;
    if (value > lastPage.current) value = lastPage.current;
    setCurrentPage(value);
  };

  return (
    <div>
      {enablePager.current ? (
        <Pager
          currentPage={currentPage}
          lastPage={lastPage.current}
          changePage={changePage}
        />
      ) : null}
      {(enablePager.current
        ? items.slice(currentPage - 1, currentPage - 1 + itemsPerPage)
        : items
      ).map((item: any) => (
        <pre key={item.index}>{JSON.stringify(item, null, 4)}</pre>
      ))}
    </div>
  );
};

export default CategoryList;
