import {
  Form,
  FormInput,
  FormRadioButton,
} from '&components/form';

const SectionBooking: React.FC = () => {
  return (
    <section id="section-book" className="section-book">
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
              <div className="form__group u-margin-bottom-medium">
                <FormRadioButton size="small">
                  Small tour group
                </FormRadioButton>
                <FormRadioButton size="large">
                  Large tour group
                </FormRadioButton>
              </div>
              <div className="form__group">
                <button className="btn btn--green">
                  Next Step &rarr;
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBooking;
