export interface ButtonProps {
  href: string;
  className: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
};

export default Button;
