interface HeadingProps {
  type: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  switch (props.type) {
    case 'primary':
      return (
        <h1 className={`heading-primary ${props.className}`}>
          {props.children}
        </h1>
      );
    case 'secondary':
      return (
        <div className={`u-center-text u-margin-bottom-big`}>
          <h2
            className={`heading-secondary ${props.className}`}
          >
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
    default:
      return <div>No Title Provided</div>;
  }
};
