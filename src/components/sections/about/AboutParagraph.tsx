import Heading from '&components/Heading';

interface AboutParagrahProps {
  title: string;
}

const AboutParagraph: React.FC<AboutParagrahProps> = (
  props,
) => {
  return (
    <>
      <Heading type="tertiary">{props.title}</Heading>
      <p className="paragraph">{props.children}</p>
    </>
  );
};

export default AboutParagraph;
