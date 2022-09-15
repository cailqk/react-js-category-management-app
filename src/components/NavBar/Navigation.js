import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="links-div">
      <NavLink activeClassName="active" to="/add" className="navigation-links">
        Add New
      </NavLink>
      <NavLink activeClassName="active" to="/categories" className="navigation-links">
        Get All
      </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
