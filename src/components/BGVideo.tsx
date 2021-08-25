interface BGVideoProps {
  mp4: string;
  webm: string;
  noVid: string;
}

const BGVideo: React.FC<BGVideoProps> = (props) => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={props.mp4}></source>
        <source src={props.webm}></source>
        {props.noVid}
      </video>
    </div>
  );
};

export default BGVideo;
