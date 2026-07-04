import { NavLink } from "react-router-dom";

interface MenuItemProps {
  to: string;
  text: string;
  className: string;
  activeClassName: string;
  onNavigate?: () => void;
}

const MenuItem = ({ to, text, className, activeClassName, onNavigate }: MenuItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${className} ${activeClassName}` : className)}
      onClick={onNavigate}
    >
      {text}
    </NavLink>
  );
};

export default MenuItem;
