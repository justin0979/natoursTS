import nat8 from '&img/nat-8.jpg';
import nat9 from '&img/nat-9.jpg';
import Heading from '&components/Heading';
import Button from '&components/Button';

const Popup: React.FC = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img
            src={nat8}
            alt="Tour Photo"
            className="popup__img"
          />
          <img
            src={nat9}
            alt="Tour Photo"
            className="popup__img"
          />
        </div>
        <div className="popup__right">
          <Heading
            type="secondary"
            className=""
            classNameDiv="u-margin-bottom-small"
          >
            Start booking now
          </Heading>
          <Heading type="tertiary" className="">
            Important &ndash; Please read these terms before
            booking
          </Heading>
          <p className="popup__text">
            Dolor ea in possimus sit libero. Ducimus accusantium
            quis inventore autem repudiandae Odio repellat quis
            inventore autem repudiandae Odio repellat quis
            inventore autem repudiandae Odio repellat placeat
            necessitatibus dicta hic eveniet. Possimus iusto
            placeat ipsa voluptatem ducimus Ad ullam pariatur
            necessitatibus dicta hic eveniet. Possimus iusto
            placeat ipsa voluptatem ducimus Ad ullam pariatur
            ducimus amet omnis odio quidem Mollitia natus nihil
            ullam veniam saepe quod Veniam nihil consequatur!
          </p>
          <Button href="#" className="btn btn--green">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
