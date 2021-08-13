import nat1 from "&img/nat-1-large.jpg";
import nat2 from "&img/nat-2-large.jpg";
import nat3 from "&img/nat-3-large.jpg";

export const AboutImage: React.FC = () => {
  return (
    <div className="composition">
      <img
        className="composition__photo composition__photo--p1"
        src={nat1}
        alt="Photo 1"
      />
      <img
        className="composition__photo composition__photo--p2"
        src={nat2}
        alt="Photo 2"
      />
      <img
        className="composition__photo composition__photo--p3"
        src={nat3}
        alt="Photo 3"
      />
    </div>
  );
};
