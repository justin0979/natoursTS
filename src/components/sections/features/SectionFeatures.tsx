import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionFeatures: React.FC = () => {
  return (
    <section id="features">
      <h1>Features</h1>
      <FontAwesomeIcon size="3x" icon="compass" />
      <FontAwesomeIcon size="3x" icon="map" />
      <FontAwesomeIcon size="4x" icon="key" />
      <FontAwesomeIcon size="4x" icon="heart" />
    </section>
  );
};
