interface ToursApp {
  cardNum: number;
  title: string;
}

export const Tours: React.FC<ToursApp> = (props) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className={`card__side card__side--front`}>
          {props.title}
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
