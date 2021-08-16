import { Heading } from '&components/Heading';

interface ToursApp {
  cardNum: number;
  title: string;
}

export const ToursCard: React.FC<ToursApp> = (props) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className={`card__side card__side--front`}>
          <div
            className={`card__picture card__picture--${props.cardNum}`}
          >
            &nbsp;
          </div>
          <Heading
            type="quarternary"
            className="card__heading"
          >
            <span
              className={`card__heading-span card__heading-span--${props.cardNum}`}
            >
              {props.title}
            </span>
          </Heading>
          <div className="card__details">
            <ul>
              <li>3 day tours</li>
              <li>Up to 30 people</li>
              <li>2 tour guides</li>
              <li>Sleep in cozy hotels</li>
              <li>Difficulty: Easy</li>
            </ul>
          </div>
        </div>
        <div
          className={`card__side card__side--back card__side--back-${props.cardNum}`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};
