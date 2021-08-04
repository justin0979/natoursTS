export const Grid: React.FC = () => {
  return (
    <section id="grid">
      <div className="row">
        <div className="col-1-of-2 col">col-1-of-2</div>
        <div className="col-1-of-2 col">col-1-of-2</div>
      </div>
      <div className="row">
        <div className="col-1-of-3 col">col-1-of-3</div>
        <div className="col-1-of-3 col">col-1-of-3</div>
        <div className="col-1-of-3 col">col-1-of-3</div>
      </div>
      <div className="row">
        <div className="col-1-of-3 col">col-1-of-3</div>
        <div className="col-2-of-3 col">col-2-of-3</div>
      </div>
      <div className="row">
        <div className="col-1-of-4 col">col-1-of-4</div>
        <div className="col-1-of-4 col">col-1-of-4</div>
        <div className="col-1-of-4 col">col-1-of-4</div>
        <div className="col-1-of-4 col">col-1-of-4</div>
      </div>
      <div className="row">
        <div className="col-1-of-4 col">col-1-of-4</div>
        <div className="col-1-of-4 col">col-1-of-4</div>
        <div className="col-2-of-4 col">col-2-of-4</div>
      </div>
      <div className="row">
        <div className="col-1-of-4 col">col-1-of-4</div>
        <div className="col-3-of-4 col">col-3-of-4</div>
      </div>
    </section>
  );
};
