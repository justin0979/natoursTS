import Button from './Button';
import Heading from './Heading';
import logoWhite from '&img/logo-white.png';

const Header: React.FC = () => {
  return (
    <header id="header" className="header">
      <div className="header__logo-box">
        <img
          src={logoWhite}
          alt="Logo"
          className="header__logo"
        />
      </div>
      <div className="header__text-box">
        <Heading type="primary">
          <span className="heading-primary--main">
            Outdoors
          </span>
          <span className="heading-primary--sub">
            is where life happens
          </span>
        </Heading>
        <Button
          className="btn btn--white btn--animated"
          href="#about"
        >
          Discover our tours
        </Button>
      </div>
    </header>
  );
};

export default Header;
