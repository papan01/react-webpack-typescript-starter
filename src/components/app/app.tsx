import React from 'react';
import './sass/app.scss';
import Logo from './logo.png';

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={Logo} alt="PAPAN's World" />
    </div>
  );
}
