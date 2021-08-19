import Button from '&components/Button';

const Jumper: React.FC = () => {
  return (
    <div className="jumper">
      <div className="jumper__arr">
        <Button
          className="jumper__arr--btn jumper__arr--btn-up jumper__arr--shadow"
          href="#"
        >
          Up
        </Button>
        <Button
          className="jumper__arr--btn jumper__arr--btn-down jumper__arr--shadow"
          href="#footer"
        >
          Down
        </Button>
      </div>
    </div>
  );
};

export default Jumper;
