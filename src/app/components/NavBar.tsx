import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex gap-2 p-2">
      <Link href={'/'}>Home</Link>
      <Link href={'/wiki'}>Wiki</Link>
    </div>
  );
};

export default NavBar;
