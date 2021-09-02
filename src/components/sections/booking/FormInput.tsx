interface FormInputProps {
  type: string;
  label: string;
  id: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
  return (
    <>
      <input
        className="form__input"
        type={props.type}
        placeholder={props.label}
        id={props.id}
        autoComplete="off"
        required
      />
      <label htmlFor={props.id} className="form__label">
        {props.label}
      </label>
    </>
  );
};

export default FormInput;
