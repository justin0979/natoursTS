import FeatureBox from './FeatureBox';

const SectionFeatures: React.FC = () => {
  return (
    <section id="features" className="section-features">
      <div className="row">
        <FeatureBox heading="Explore the World" icon="globe">
          Dolor odit consequatur blanditiis vel atque veritatis
          reiciendis voluptas! Velit ex impedit laborum dolor
          quisquam! Consectetur omnis
        </FeatureBox>
        <FeatureBox heading="Meet Nature" icon="compass">
          Dolor odit blanditiis vel atque veritatis reiciendis
          voluptas! Velit ex impedit laborum dolor quisquam!
          Consectetur omnis
        </FeatureBox>
        <FeatureBox heading="Find your way" icon="map">
          Dolor odit consequatur blanditiis vel atque veritatis
          reiciendis voluptas! Velit ex impedit laborum dolor
        </FeatureBox>
        <FeatureBox
          heading="Live a healthier life"
          icon="heart"
        >
          Dolor odit consequatur blanditiis vel atque veritatis
          ! Velit ex impedit laborum dolor quisquam!
          Consectetur omnis
        </FeatureBox>
      </div>
    </section>
  );
};

export default SectionFeatures;
