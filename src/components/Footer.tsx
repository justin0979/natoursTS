import logoGreen2x from '&img/logo-green-2x.png';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo-box">
        <img
          src={logoGreen2x}
          alt="Full logo"
          className="footer__logo"
        />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a className="footer__link" href="#">
              Justin
            </a>{' '}
            by following an online course,{' '}
            <a className="footer__link" href="#">
              Advanced CSS and Sass
            </a>{' '}
            , that teaches advanced concepts with styling web
            pages. &copy; by Jonas Schmedtmann, the instructor of
            this course.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
