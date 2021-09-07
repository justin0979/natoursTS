interface NavItemProps {
  href: string;
  id: string;
  status?: () => void;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className="navigation__item">
      <a
        onClick={props.status}
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
