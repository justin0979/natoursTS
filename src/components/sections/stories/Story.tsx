import Heading from '&components/Heading';

interface StoryProps {
  img: string;
  title: string;
  alt: string;
  caption: string;
}

const Story: React.FC<StoryProps> = (props) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img
          src={props.img}
          alt={props.alt}
          className="story__img"
        />
        <figcaption className="story__caption">
          {props.caption}
        </figcaption>
      </figure>
      <div className="story__text">
        <Heading type="tertiary">{props.title}</Heading>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Story;
