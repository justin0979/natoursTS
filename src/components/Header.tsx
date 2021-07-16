import { Button } from "./Button";
import logoWhite from "&img/logo-white.png";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="Logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">
            Outdoors
          </span>
          <span className="heading-primary-sub">
            is where life happens
          </span>
        </h1>
        <Button />
      </div>
    </header>
  );
};
