import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from './logo.png';

const Logo: React.FunctionComponent = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="papan-logo" src={Icon} alt="PAPAN's logo" />
      </Link>
    </div>
  );
};
const LogoMemo = React.memo(Logo);

const Header: React.FunctionComponent = () => {
  useEffect(() => {
    import(/* webpackChunkName: 'header' */ './header.scss');
  });

  return (
    <div className="top-bar">
      <LogoMemo />
    </div>
  );
};

export default Header;
