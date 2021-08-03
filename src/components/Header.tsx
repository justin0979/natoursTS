import { Button } from "./Button";
import logoWhite from "&img/logo-white.png";

export const Header: React.FC = () => {
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
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            Outdoors
          </span>
          <span className="heading-primary--sub">
            is where life happens
          </span>
        </h1>
        <Button />
      </div>
    </header>
  );
};
