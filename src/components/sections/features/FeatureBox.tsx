import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Heading } from '&components/Heading';

interface FeatureBoxProps {
  heading: string;
  icon: IconProp;
}

export const FeatureBox: React.FC<FeatureBoxProps> = (
  props,
) => {
  return (
    <div className="col-1-of-4 feature-box">
      <FontAwesomeIcon
        className="feature-box__icon"
        icon={props.icon}
      />
      <Heading type="tertiary">Explore the world</Heading>
      <p className="feature-box__text">{props.children}</p>
    </div>
  );
};
