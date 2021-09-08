interface NavItemProps {
  href: string;
  id: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  console.log(props.inputRef.current);
  return (
    <li className="navigation__item">
      <a
        onClick={() => {
          if (props.inputRef.current) {
            props.inputRef.current.checked = false;
          }
        }}
        className="navigation__link"
        href={props.href}
      >
        <span>{props.id}</span>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
