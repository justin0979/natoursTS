import { Heading } from '&components/Heading';
import { ToursCard } from './ToursCard';

export const SectionTours: React.FC = () => {
  return (
    <div className="section-tours" id="tours">
      <Heading type="secondary">Tours</Heading>
      <div className="row">
        <ToursCard title="The Sea Explorer" cardNum={1}>
          Card One
        </ToursCard>
        <ToursCard title="The Forest Explorer" cardNum={2}>
          Card Two
        </ToursCard>
        <ToursCard title="The Mountain Explorer" cardNum={3}>
          Card Three
        </ToursCard>
      </div>
    </div>
  );
};
