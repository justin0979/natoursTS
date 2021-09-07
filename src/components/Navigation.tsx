const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <input className="navigation__checkbox" type="checkbox" />
      <label className="navigation__button" htmlFor="">
        MENU
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              About Natours
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
