import { Heading } from '&components/Heading';

interface ToursCardProps {
  cardNum: number;
  title: string;
}

export const ToursCardFront: React.FC<ToursCardProps> = (
  props,
) => {
  return (
    <div className={`card__side card__side--front`}>
      <div
        className={`card__picture card__picture--${props.cardNum}`}
      >
        &nbsp;
      </div>
      <Heading type="quarternary" className="card__heading">
        <span
          className={`card__heading-span card__heading-span--${props.cardNum}`}
        >
          {props.title}
        </span>
      </Heading>
      <div className="card__details">{props.children}</div>
    </div>
  );
};
