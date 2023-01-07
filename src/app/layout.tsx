import React from 'react';
import NavBar from './components/NavBar';
import '../styles/globals.css';

type Props = {
  children?: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="content">{props.children}</div>
      </body>
    </html>
  );
};

export default layout;
