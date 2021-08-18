import ToursCardBack from './ToursCardBack';
import ToursCardFront from './ToursCardFront';

export interface ToursCardApp {
  cardNum: number;
  title: string;
  price: string;
}

const ToursCard: React.FC<ToursCardApp> = (props) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <ToursCardFront
          title={props.title}
          cardNum={props.cardNum}
        >
          {props.children}
        </ToursCardFront>
        <ToursCardBack cardNum={props.cardNum}>
          {props.price}
        </ToursCardBack>
      </div>
    </div>
  );
};

export default ToursCard;
