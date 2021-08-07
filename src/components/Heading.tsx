interface HeadingProps {
  type: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  switch (props.type) {
    case "primary":
      return (
        <h1 className="heading-primary">{props.children}</h1>
      );
    case "secondary":
      return (
        <div className="u-center-text">
          <h2 className="heading-secondary">
            {props.children}
          </h2>
        </div>
      );
    default:
      return <div>No Title Provided</div>;
  }
};
