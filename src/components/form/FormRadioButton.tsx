interface FormRadioButtonProps {
  size: string;
}

const FormRadioButton: React.FC<FormRadioButtonProps> = (
  props,
) => {
  return (
    <div className="form__radio-group">
      <input
        className="form__radio-input"
        type="radio"
        id={props.size}
        name="size"
      />
      <label className="form__radio-label" htmlFor={props.size}>
        {props.children}
      </label>
    </div>
  );
};

export default FormRadioButton;
