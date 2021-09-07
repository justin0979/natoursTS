interface NavItemProps {
  href: string;
  id: string;
  onClick: any;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li
      onClick={() => props.onClick(false)}
      className="navigation__item"
    >
      <a className="navigation__link" href={props.href}>
        <span>{props.id}</span>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
