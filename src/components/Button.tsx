interface ButtonProps {
  href: string;
  className: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
};
