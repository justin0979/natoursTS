import { Heading } from "&components/Heading";

export const SectionAbout: React.FC = () => {
  return (
    <section id="about" className="section-about">
      <Heading type="secondary">
        Exciting tours for adventurous people
      </Heading>
      <div className="row">
        <div className="col-1-of-2">Text content</div>
        <div className="col-1-of-2">Image Composition</div>
      </div>
    </section>
  );
};
