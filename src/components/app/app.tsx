import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../../layout/main.scss';
import Header from '../header/header';

export default function App(): JSX.Element {
  return (
    <Router>
      <Header />
    </Router>
  );
}
