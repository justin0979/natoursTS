import Heading from '&components/Heading';
import ToursCard from './ToursCard';
import Button from '&components/Button';

const SectionTours: React.FC = () => {
  return (
    <section className="section-tours" id="tours">
      <Heading type="secondary">Most Popular Tours</Heading>
      <div className="row">
        <ToursCard
          title="The Sea Explorer"
          price="$291"
          cardNum={1}
          href="#popup"
        >
          <ul>
            <li>3 day tours</li>
            <li>Up to 30 people</li>
            <li>2 tour guides</li>
            <li>Sleep in cozy hotels</li>
            <li>Difficulty: Easy</li>
          </ul>
        </ToursCard>
        <ToursCard
          title="The Forest Hiker"
          price="$497"
          cardNum={2}
          href="#popup"
        >
          <ul>
            <li>7 day tour</li>
            <li>Up to 40 people</li>
            <li>6 tour guides</li>
            <li>sleep in provided tents</li>
            <li>Difficulty: medium</li>
          </ul>
        </ToursCard>
        <ToursCard
          title="The Snow Adventurer"
          price="$897"
          cardNum={3}
          href="#popup"
        >
          <ul>
            <li>5 day tour</li>
            <li>Up to 15 people</li>
            <li>3 tour guides</li>
            <li>Sleep in provided tents</li>
            <li>Difficulty: hard</li>
          </ul>
        </ToursCard>
      </div>
      <div className="u-center-text u-margin-top-big">
        <Button className="btn btn--green" href="#footer">
          Discover all tours
        </Button>
      </div>
    </section>
  );
};

export default SectionTours;
