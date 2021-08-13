import { Heading } from '&components/Heading';
import { Tours } from './Tours';

export const SectionTours: React.FC = () => {
  return (
    <div className="section-tours" id="tours">
      <Heading type="secondary">Tours</Heading>
      <div className="row">
        <Tours title="Well" cardNum={1}>
          Card One
        </Tours>
        <Tours title="Well" cardNum={2}>
          Card Two
        </Tours>
        <Tours title="Well" cardNum={3}>
          Card Three
        </Tours>
      </div>
    </div>
  );
};
