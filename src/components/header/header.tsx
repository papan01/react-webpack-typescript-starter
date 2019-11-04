import React from 'react';

const logo: React.FunctionComponent = () => {
  return (
    <div className="logo">
      <img className="papan-logo" alt="PAPAN's logo" />
    </div>
  );
};
const Logo = React.memo(logo);

const Header: React.FunctionComponent = () => {
  return (
    <div className="top-bar">
      <Logo />
      <p>I&apos;m Header</p>
    </div>
  );
};

export default Header;
