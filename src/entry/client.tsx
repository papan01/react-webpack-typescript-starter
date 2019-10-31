import '../sass/style.scss';

import React from 'react';
import { render } from 'react-dom';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello Webpack</h1>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
