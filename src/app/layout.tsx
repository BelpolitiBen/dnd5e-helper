import React from 'react';
import './globals.css';

type Props = {
  children?: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
};

export default layout;
