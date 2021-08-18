import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Heading from '&components/Heading';

export interface FeatureBoxProps {
  heading: string;
  icon: IconProp;
}

//const styling = {
//  backgroundImage:
//    'linear-gradient(to right, #7ed56f, #28b485)',
//  backgroundClip: 'text',
//  color: 'tranparent',
//};

const FeatureBox: React.FC<FeatureBoxProps> = (props) => {
  return (
    <div className="col-1-of-4 feature-box">
      <FontAwesomeIcon
        className="feature-box__icon"
        icon={props.icon}
        color="#7ed56f"
      />
      <Heading type="tertiary">{props.heading}</Heading>
      <p className="feature-box__text">{props.children}</p>
    </div>
  );
};

export default FeatureBox;
