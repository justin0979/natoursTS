import { AboutParagraph } from "./AboutParagraph";
import { AboutImage } from "./AboutImage";
import { Heading } from "&components/Heading";
import { Button } from "&components/Button";

export const SectionAbout: React.FC = () => {
  return (
    <section id="about" className="section-about">
      <Heading type="secondary">
        Exciting tours for adventurous people
      </Heading>
      <div className="row">
        <div className="col-1-of-2">
          <AboutParagraph title="You're going to fall in love with nature">
            Amet totam distinctio itaque molestias dolorum
            Culpa error necessitatibus qui voluptates iste,
            error Molestias asperiores ipsam odit labore aut
            sapiente fugiat Sapiente voluptatem id quas
            reiciendis tempore? Officiis nisi voluptas.
          </AboutParagraph>
          <AboutParagraph title="Live adventures like you never have before">
            Lorem tenetur similique reprehenderit dolore illum
            Tempora esse amet iusto nesciunt amet excepturi
            porro? Iste quod nostrum cumque provident culpa
            quaerat.
          </AboutParagraph>
          <Button href="#" className="btn-text">
            Learn more&rarr;
          </Button>
        </div>
        <div className="col-1-of-2">
          <AboutImage></AboutImage>
        </div>
      </div>
    </section>
  );
};
