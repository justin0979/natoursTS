import logoWhite from "&img/logo-white.png";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="" />
      </div>
    </header>
  );
};
