import { Heading } from '&components/Heading';
import { Tours } from './Tours';

export const SectionTours: React.FC = () => {
  return (
    <div className="section-tours" id="tours">
      <Heading type="secondary">Tours</Heading>
      <div className="row">
        <Tours />
      </div>
    </div>
  );
};
