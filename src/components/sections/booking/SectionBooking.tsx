import {
  Form,
  FormInput,
  FormRadioButton,
} from '&components/form';

const SectionBooking: React.FC = () => {
  return (
    <section id="booking" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <Form heading="Start Booking Now" action="#">
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
                <FormRadioButton size="small">
                  Small tour group
                </FormRadioButton>
                <FormRadioButton size="large">
                  Large tour group
                </FormRadioButton>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBooking;
