interface AboutImageProps {
  id: number;
  src: string;
  srclg: string;
}

const AboutImage: React.FC<AboutImageProps> = (props) => {
  return (
    <img
      src={props.src}
      srcSet={`${props.src} 300w, ${props.srclg} 1000w`}
      sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
      alt={`Photo ${props.id}`}
      className={`composition__photo composition__photo--p${props.id}`}
    />
  );
};

export default AboutImage;
