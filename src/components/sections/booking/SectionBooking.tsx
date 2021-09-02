import Heading from '&components/Heading';
import FormInput from './FormInput';
import RadioButton from './RadioButton';

const SectionBooking: React.FC = () => {
  return (
    <section id="booking" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form" action="#">
              <Heading
                type="secondary"
                classNameDiv="u-margin-bottom-medium"
              >
                Start Booking Now
              </Heading>
              <div className="form__group">
                <FormInput
                  label="Full Name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="form__group">
                <FormInput
                  label="Email Address"
                  type="email"
                  id="email"
                />
              </div>
              <div className="form__group">
                <RadioButton size="small">
                  Small tour group
                </RadioButton>
                <RadioButton size="large">
                  Large tour group
                </RadioButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBooking;
