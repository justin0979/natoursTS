import AboutParagraph from './AboutParagraph';
import AboutImage from './AboutImage';
import Heading from '&components/Heading';
import Button from '&components/Button';
import nat1lg from '&img/nat-1-large.jpg';
import nat1 from '&img/nat-1.jpg';
import nat2lg from '&img/nat-2-large.jpg';
import nat2 from '&img/nat-2.jpg';
import nat3lg from '&img/nat-3-large.jpg';
import nat3 from '&img/nat-3.jpg';

const SectionAbout: React.FC = () => {
  return (
    <section id="about" className="section-about">
      <Heading type="secondary">
        Exciting tours for adventurous people
      </Heading>
      <div className="row">
        <div className="col-1-of-2">
          <AboutParagraph title="You're going to fall in love with nature">
            Amet totam distinctio itaque molestias dolorum Culpa
            error necessitatibus qui voluptates iste, error
            Molestias asperiores ipsam odit labore aut sapiente
            fugiat Sapiente voluptatem id quas reiciendis
            tempore? Officiis nisi voluptas.
          </AboutParagraph>
          <AboutParagraph title="Live adventures like you never have before">
            Lorem tenetur similique reprehenderit dolore illum
            Tempora esse amet iusto nesciunt amet excepturi
            porro? Iste quod nostrum cumque provident culpa
            quaerat.
          </AboutParagraph>
          <Button href="#features" className="btn-text">
            Learn more&rarr;
          </Button>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <AboutImage id={1} src={nat1} srclg={nat1lg} />
            <AboutImage id={2} src={nat2} srclg={nat2lg} />
            <AboutImage id={3} src={nat3} srclg={nat3lg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
