import Heading from '&components/Heading';

interface FormProps {
  heading?: string;
  action: string;
}

const Form: React.FC<FormProps> = (props) => {
  if (props.heading) {
    return (
      <form className="form" action={props.action}>
        <Heading
          type="secondary"
          classNameDiv="u-margin-bottom-medium"
        >
          {props.heading}
        </Heading>
        {props.children}
      </form>
    );
  }
  return (
    <form className="form" action={props.action}>
      {props.children}
    </form>
  );
};

export default Form;
