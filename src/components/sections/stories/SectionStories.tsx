import Heading from '&components/Heading';
import Story from './Story';
import Button from '&components/Button';
import nat8 from '&img/nat-8.jpg';
import nat9 from '&img/nat-9.jpg';

const SectionStories = () => {
  return (
    <section id="stories" className="section-stories">
      <Heading type="secondary">
        We make people genuinely happy
      </Heading>

      <div className="row">
        <Story
          img={nat8}
          title="I had the best week ever with my family"
          alt="Person on a tour"
          caption="Mary Smith"
        >
          Lorem officia minima ullam aliquid veritatis Sint harum
          id incidunt incidunt earum nemo. Quibusdam reiciendis
          cupiditate enim qui a Delectus dignissimos dolorem
          possimus iure perferendis consectetur Qui eos
          voluptates molestias dignissimos dolorem possimus iure
          perferendis
        </Story>
        <Story
          img={nat9}
          title="Blah Blah Something Here something there"
          alt="Watching horizon"
          caption="Joe Blow"
        >
          Amet sed deserunt sapiente quisquam accusamus ut. Culpa
          lorem
        </Story>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <Button className="btn-text" href="#">
          Read All stories &rarr;
        </Button>
      </div>
    </section>
  );
};

export default SectionStories;
