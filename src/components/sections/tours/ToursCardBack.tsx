import { Button } from '&components/Button';

interface ToursCardBackProps {
  cardNum: number;
}

export const ToursCardBack: React.FC<ToursCardBackProps> = (
  props,
) => {
  return (
    <div
      className={`card__side card__side--back card__side--back-${props.cardNum}`}
    >
      <div className="card__cta">
        <div className="card__price-box">
          <p className="card__price-only">Only</p>
          <p className="card__price-value">{props.children}</p>
        </div>
        <Button className="btn btn--white" href="#footer">
          Book now!
        </Button>
      </div>
    </div>
  );
};
