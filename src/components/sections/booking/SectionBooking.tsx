import Heading from '&components/Heading';

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
                <input
                  className="form__input"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
                <div className="form__group">
                  <input
                    className="form__input"
                    type="text"
                    placeholder="Full Name"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBooking;
