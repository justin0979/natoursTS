export interface HeadingProps {
  type: string;
  className?: string;
  classNameDiv?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  switch (props.type) {
    case 'primary':
      return (
        <h1 className={`heading-primary ${props.className}`}>
          {props.children}
        </h1>
      );
    case 'secondary':
      if (props.classNameDiv) {
        // use customized utility css classes
        return (
          <div className={props.classNameDiv}>
            <h2
              className={`heading-secondary ${props.className}`}
            >
              {props.children}
            </h2>
          </div>
        );
      }
      // use set utility css classes
      return (
        <div className={`u-center-text u-margin-bottom-big`}>
          <h2 className={`heading-secondary ${props.className}`}>
            {props.children}
          </h2>
        </div>
      );
    case 'tertiary':
      return (
        <h3
          className={`heading-tertiary u-margin-bottom-small ${props.className}`}
        >
          {props.children}
        </h3>
      );
    case 'quarternary':
      return (
        <h4 className={`heading-quarternary ${props.className}`}>
          {props.children}
        </h4>
      );
    default:
      return <div>No Title Provided</div>;
  }
};

export default Heading;
